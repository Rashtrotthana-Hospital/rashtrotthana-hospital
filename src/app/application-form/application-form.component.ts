import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';

// import { Recuriting, Job, Application } from '../../services/recruiting/recuriting';

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrl: './application-form.component.css'
})
export class ApplicationFormComponent implements OnInit {

  private fb = inject(FormBuilder);
  // private api = inject(Recuriting);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private messageService = inject(MessageService);

  // jobs: Job[] = [];
  jobs: { id: number; title: string }[] = [];
  loading = true;
  saving = false;
  error?: string;

  selectedResumeFile?: File;

  form = this.fb.group({
    jobId: [null as number | null, Validators.required],
    candidate: this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      source: [''],
      resumeUrl: [''],
      qualification: ['', Validators.required],
      experience: ['', Validators.required],
      address: [''],
    }),
  });

  // ngOnInit(): void {
  //   const jobIdFromQuery = Number(this.route.snapshot.queryParamMap.get('jobId'));
  //   if (jobIdFromQuery) {
  //     this.form.patchValue({ jobId: jobIdFromQuery });
  //   }



  //   this.api.listJobs({ status: 'OPEN', pageSize: 100 }).subscribe({
  //     next: (res) => {
  //       this.jobs = res.rows;
  //       this.loading = false;
  //     },
  //     error: () => {
  //       this.loading = false;
  //     }
  //   });
  // }

  ngOnInit(): void {
    // Temporary data for dropdown
    this.jobs = [
      { id: 1, title: 'Frontend Developer' },
      { id: 2, title: 'Backend Developer' }
    ];
  }

  submit(): void {
    this.error = undefined;

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    if (!this.selectedResumeFile) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Please upload your resume!',
      });
      return;
    }

    this.saving = true;

    const formData = new FormData();
    formData.append('jobId', this.form.value.jobId!.toString());
    formData.append('candidate', JSON.stringify(this.form.value.candidate));
    formData.append('resume', this.selectedResumeFile);

    // this.api.createApplication(formData).subscribe({
    //   next: (_app: Application) => {
    //     this.messageService.add({
    //       severity: 'success',
    //       summary: 'Success',
    //       detail: 'Application created!',
    //     });
    //     this.form.reset();
    //     this.selectedResumeFile = undefined;
    //     this.router.navigate(['/recruitment/jobs']);
    //   },
    //   error: (e) => {
    //     this.error = e?.error?.error || 'Failed to create';
    //   },
    //   complete: () => {
    //     this.saving = false;
    //   }
    // });

    console.log(this.form.value.candidate);
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files?.length) {
      this.selectedResumeFile = input.files[0];
    }
  }

  isInvalid(path: string): boolean {
    const control = this.form.get(path);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }
}
