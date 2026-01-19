import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Application, CareerFormServiceService, Job } from '../career-form-service.service';

// import { Recuriting, Job, Application } from '../../services/recruiting/recuriting';

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrl: './application-form.component.css'
})
export class ApplicationFormComponent implements OnInit {

  private fb = inject(FormBuilder);
  private api = inject(CareerFormServiceService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private messageService = inject(MessageService);

  jobs: Job[] = [];
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
      qualification: ['', [Validators.required]],
      experience: ['', [Validators.required]],
      address: [''],
    }),
  });

ngOnInit() {
  const jobIdFromQuery = Number(this.route.snapshot.queryParamMap.get('jobId'));
  if (jobIdFromQuery) this.form.patchValue({ jobId: jobIdFromQuery });
  this.loading = true;

  console.log('Calling API...'); // Add this
  
  this.api.listJobs({ status: 'OPEN', pageSize: 100 }).subscribe({
    next: (res) => {
      console.log('API Response:', res); // Add this
      this.jobs = res.rows;
      this.loading = false;
    },
    error: (err) => {
      console.error('API Error:', err); // Add this
      console.error('Error Status:', err.status); // Add this
      console.error('Error Message:', err.message); // Add this
      console.error('Error Details:', err.error); // Add this
      this.loading = false;
    }
  });
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

    // attach resume file if selected
    if (this.selectedResumeFile) {
      formData.append("resume", this.selectedResumeFile);
    }

    this.api.createApplication(formData).subscribe({
      next: (_app: Application) => {
        this.messageService.add({
          severity: "success",
          summary: "Success",
          detail: "Application created!",
        });
        this.router.navigate(["/recruitment/jobs"]);
        this.form.reset();
        this.selectedResumeFile = undefined;
      },
      error: (e) => (this.error = e?.error?.error || "Failed to create"),
      complete: () => (this.saving = false),
    });
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
