import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environment';

const baseUrl = environment.hrmindsApiUrl + '/recruiting';

export type JobStatus = 'OPEN' | 'ON_HOLD' | 'CLOSED' | 'DRAFT';
export interface Job {
  id: number; title: string; departmentId: number; location?: string | null; departmentName?: string;
  headcount: number; status: JobStatus; createdAt: string; updatedAt: string;
}

export interface Paged<T> { total: number; rows: T[]; }

export type ApplicationStatuses =
  | 'APPLIED' | 'SCREENING' | 'SHORTLISTED'
  | 'INTERVIEW_SCHEDULED' | 'INTERVIEWED'
  | 'OFFERED' | 'OFFER_ACCEPTED' | 'OFFER_DECLINED'
  | 'REJECTED' | 'WITHDRAWN' | 'HIRED' | 'NO_SHOW';
export type RejectReason = 'SALARY' | 'ROLE_MISMATCH' | 'LOCATION' | 'EXPERIENCE' | 'CULTURE' | 'OTHER';
export type OfferStatus = 'DRAFT' | 'SENT' | 'VIEWED' | 'SIGNED' | 'DECLINED' | 'WITHDRAWN' | 'EXPIRED';
export type JoinOutcome = 'JOINED' | 'NO_SHOW' | 'DEFERRED';
export interface Candidate { id: number; name: string; email: string; phone?: string | null; source?: string | null; resumeUrl?: string | null; }
export interface Offer {
  id: number; applicationId: number; status: OfferStatus;
  sentAt?: string | null; viewedAt?: string | null; signedAt?: string | null;
  declinedAt?: string | null; declineReason?: string | null;
  proposedJoinAt?: string | null; joinOutcome?: JoinOutcome | null; noShowReason?: string | null;
}
export interface Interview {
  id: number; applicationId: number; stage: string;
  startTime: string; endTime: string; panelUserIds?: string | null;
  feedbackUrl?: string | null; feedbackDue?: string | null; feedbackAt?: string | null; result?: string | null;
}

export interface Application {
  id: number; jobId: number; candidateId: number; status: ApplicationStatuses;
  currentStage?: string | null; rejectReason?: RejectReason | null;
  expectedCtc?: number | null; noticeDays?: number | null; salaryNote?: string | null;
  createdAt: string; updatedAt: string;
  candidate?: Candidate; job?: Job; offer?: Offer | null; interviews?: Interview[];
}

@Injectable({
  providedIn: 'root'
})
export class CareerFormServiceService {

  private http = inject(HttpClient);


  listJobs(params: { status?: JobStatus; dept?: number; q?: string; page?: number; pageSize?: number } = {}): Observable<Paged<Job>> {
    let p = new HttpParams();
    for (const [k, v] of Object.entries(params)) if (v !== undefined && v !== null && v !== '') p = p.set(k, String(v));
    return this.http.get<Paged<Job>>(`${baseUrl}/jobs`, { params: p });
  }

  createApplication(data: FormData) {
    return this.http.post<Application>(`${baseUrl}/applications`, data);
  }
}
