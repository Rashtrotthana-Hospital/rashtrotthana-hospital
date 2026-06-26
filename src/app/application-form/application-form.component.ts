import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Subject, takeUntil } from 'rxjs';
import { Application, CareerFormServiceService, Job } from '../career-form-service.service';

// import { Recuriting, Job, Application } from '../../services/recruiting/recuriting';

// Job titles arrive from HRMinds with the requisition's experience and reason
// baked into the string, e.g. "NURSING AID (2-4 yrs) – New Opening". For the
// public form we show a clean role name and surface the experience on its own.
type JobOption = Job & { displayTitle: string; experience: string | null };

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrl: './application-form.component.css'
})
export class ApplicationFormComponent implements OnInit, OnDestroy {

  private fb = inject(FormBuilder);
  private api = inject(CareerFormServiceService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private messageService = inject(MessageService);

  // Cleanup signal for all subscriptions in this component — prevents leaks
  // when user navigates away while requests are in flight.
  private destroy$ = new Subject<void>();

  jobs: JobOption[] = [];
  loading = true;
  saving = false;
  error?: string;

  selectedResumeFile?: File;

  // Referral type literals — must match the backend enum exactly. Empty string =
  // "no referral" (the candidate didn't come via a referral).
  readonly referralTypes: { value: string; label: string }[] = [
    { value: '',          label: 'Not a referral' },
    { value: 'INTERNAL',  label: 'Internal employee referral' },
    { value: 'EXTERNAL',  label: 'External individual referral' },
    { value: 'AGENCY',    label: 'Recruitment agency / consultancy' },
    { value: 'JOB_BOARD', label: 'Job board (Naukri / LinkedIn / Indeed)' },
    { value: 'SOCIAL',    label: 'Social media' },
    { value: 'WALK_IN',   label: 'Walk-in' },
    { value: 'OTHER',     label: 'Other' },
  ];

  form = this.fb.group({
    jobId: [null as number | null, Validators.required],
    candidate: this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      source: [''],
      resumeUrl: [''],
      qualification: ['', [Validators.required]],
      experience: ['', [Validators.required]],
      address: [''],
    }),
    // Referral block — `type` drives which sub-fields become required (see
    // `applyReferralValidators` below).
    referral: this.fb.group({
      type:                 [''],
      referrerEmployeeCode: [''],   // shown when type=INTERNAL
      referrerName:         [''],   // shown when type=EXTERNAL/AGENCY
      referrerEmail:        ['', [Validators.email]],
      referrerPhone:        ['', [Validators.pattern(/^[0-9]{10}$/)]],
      referrerCompany:      [''],   // shown when type=AGENCY
    }),
  });

  // Convenience getter so the template can do `referralType === 'INTERNAL'`
  get referralType(): string {
    return this.form.get('referral.type')?.value ?? '';
  }

  // The currently selected job (for the requirements panel under the dropdown).
  get selectedJob(): JobOption | null {
    const id = this.form.get('jobId')?.value;
    return this.jobs.find((j) => j.id === id) ?? null;
  }

  // Experience of the currently selected job, shown separately under the dropdown.
  get selectedExperience(): string | null {
    return this.selectedJob?.experience ?? null;
  }

  // ── Job title parsing ──────────────────────────────────────────────────────
  // HRMinds bakes "(2-4 yrs)" / "(Fresher)" / "(5+ yrs)" and a reason suffix
  // ("– New Opening" / "– Replacement" / "– Planned Addition") into Job.title.
  // The public form shouldn't expose the internal reason, and shows experience
  // on its own — so we strip both out of the displayed title.
  private readonly REASON_SUFFIX =
    /\s*[–-]\s*(New Opening|Replacement|Planned Addition|NEW_OPENING|REPLACEMENT|PLANNED_ADDITION)\s*$/i;
  private readonly EXPERIENCE_PAREN = /\s*\(([^)]*\b(?:yrs?|Fresher)\b[^)]*)\)/i;

  private cleanJobTitle(title: string): string {
    return (title || '')
      .replace(this.REASON_SUFFIX, '')
      .replace(this.EXPERIENCE_PAREN, '')
      .replace(/\s{2,}/g, ' ')
      .trim();
  }

  private extractExperience(title: string): string | null {
    const m = (title || '').match(this.EXPERIENCE_PAREN);
    return m ? m[1].trim() : null;
  }

ngOnInit() {
  const jobIdFromQuery = Number(this.route.snapshot.queryParamMap.get('jobId'));
  if (jobIdFromQuery) this.form.patchValue({ jobId: jobIdFromQuery });
  this.loading = true;

  // Whenever referral type changes, re-apply required-validators on the
  // sub-fields so the form's validity reflects the type's actual requirements.
  this.form.get('referral.type')!.valueChanges
    .pipe(takeUntil(this.destroy$))
    .subscribe((t) => this.applyReferralValidators(t || ''));
  // Apply once on init so an initial value (e.g. INTERNAL) is honoured.
  this.applyReferralValidators(this.referralType);

  this.api.listJobs({ status: 'OPEN', pageSize: 100 })
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next: (res) => {
        this.jobs = res.rows.map((j) => ({
          ...j,
          displayTitle: this.cleanJobTitle(j.title),
          experience: this.extractExperience(j.title),
        }));
        this.loading = false;
      },
      error: (err) => {
        console.error('Failed to load jobs', err);
        this.loading = false;
        this.messageService.add({
          severity: 'error',
          summary: 'Failed to load jobs',
          detail: err?.error?.error || 'Please try again.',
        });
      }
    });
}

ngOnDestroy() {
  this.destroy$.next();
  this.destroy$.complete();
}

/**
 * Type-specific required-validators for referral sub-fields. INTERNAL needs
 * the employee code; EXTERNAL/AGENCY need the referrer's name; AGENCY also
 * needs the company name. All other types have no extra requirements.
 */
private applyReferralValidators(type: string) {
  const code    = this.form.get('referral.referrerEmployeeCode')!;
  const name    = this.form.get('referral.referrerName')!;
  const company = this.form.get('referral.referrerCompany')!;

  code.clearValidators();
  name.clearValidators();
  company.clearValidators();

  if (type === 'INTERNAL') {
    code.setValidators([Validators.required]);
  } else if (type === 'EXTERNAL') {
    name.setValidators([Validators.required]);
  } else if (type === 'AGENCY') {
    name.setValidators([Validators.required]);
    company.setValidators([Validators.required]);
  }

  code.updateValueAndValidity({ emitEvent: false });
  name.updateValueAndValidity({ emitEvent: false });
  company.updateValueAndValidity({ emitEvent: false });
}

  // submit() {
  //   this.error = undefined;
  //   if (this.form.invalid) {
  //     this.form.markAllAsTouched();
  //     return;
  //   }
  //   this.saving = true;
  //   this.form.value.candidate?.experience?.toString() // default to 0 if not provided
  //   this.api.createApplication(this.form.value as any).subscribe({
  //     next: (_app: Application) => {
  //       // alert('Application created!');
  //       this.messageService.add({severity:'success', summary:'Success', detail:'Application created!'});
  //       this.router.navigate(['/recruitment/jobs']);
  //       this.form.reset();
  //     },
  //     error: (e) => (this.error = e?.error?.error || 'Failed to create'),
  //     complete: () => (this.saving = false),
  //   });
  // }
  submit() {
    this.error = undefined;
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    if (this.selectedResumeFile === undefined) {
      this.messageService.add({
        severity: "error",
        summary: "Error",
        detail: "Please upload your resume!",
      });
      this.saving = false;
      return;
    }

    this.saving = true;

    // build FormData for multipart
    const formData = new FormData();
    formData.append("jobId", this.form.value.jobId!.toString());

    // stringify candidate group
    formData.append("candidate", JSON.stringify(this.form.value.candidate));

    // Only attach the referral block if the candidate selected a type. Sending
    // an empty `type` would otherwise fail backend validation.
    const referral: any = this.form.value.referral;
    if (referral && referral.type) {
      // Strip empty strings so the backend doesn't store them as "" (cleaner
      // null in the database for unfilled optional fields).
      const cleaned = Object.fromEntries(
        Object.entries(referral).filter(([_, v]) => v !== '' && v !== null && v !== undefined),
      );
      formData.append("referral", JSON.stringify(cleaned));
    }

    // attach resume file if selected
    if (this.selectedResumeFile) {
      formData.append("resume", this.selectedResumeFile);
    }

    this.api.createApplication(formData)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (_app: Application) => {
          this.messageService.add({
            severity: "success",
            summary: "Success",
            detail: "Application created!",
          });
          this.form.reset();
          this.selectedResumeFile = undefined;
          this.saving = false;
        },
        error: (e) => {
          this.error = e?.error?.error || "Failed to create";
          this.saving = false;
          this.messageService.add({
            severity: "error",
            summary: "Submission failed",
            detail: this.error,
          });
        },
      });
  }

  removeFile(input: HTMLInputElement) {
    this.selectedResumeFile = undefined;
    input.value = '';
  }


  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedResumeFile = input.files[0];
    }
  }

  isInvalid(form: string) {
    const control = this.form.get(form);
    return control?.invalid && (control.touched || control.dirty)
  }
}
