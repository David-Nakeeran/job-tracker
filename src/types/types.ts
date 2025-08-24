import { ReactNode } from "react";

export type JobFormData = {
  position: string;
  company: string;
  date_applied: string;
  location?: string;
  status: string;
  notes?: string;
  work_type: string;
  salary: number;
  job_url?: string;
  description?: string;
};

export type JobInsertPayload = JobFormData & { id: string };

export type UserIdProps = {
  userId: string;
};

export type JobIdProps = {
  jobId: number;
};

export type JobFormState = {
  message: string;
};

export type Job = {
  id: number;
  position: string;
  company: string;
  date_applied: string;
  location?: string;
  status: "applied" | "interview" | "rejected";
  notes?: string;
  work_type: "full-time" | "part-time" | "contract";
  salary: number;
  job_url?: string;
  description?: string;
};

export type JobProps = {
  jobs: Job[];
};

export type JobCardProps = {
  jobId: number;
  position: string;
  company: string;
  date_applied: string;
  location?: string;
  status: "applied" | "interview" | "rejected";
  notes?: string;
  work_type: "full-time" | "part-time" | "contract";
  salary: number;
  job_url?: string;
  description?: string;
};

export type JobProviderProps = {
  jobs: Job[]; // an array of Job objects (each item matches the Job type)
  children: ReactNode;
};

export type StatusCardProps = {
  status: string;
  count: number;
  children: ReactNode;
};
