import { ReactNode } from "react";

export type JobFormData = {
  position: string;
  company: string;
  date_applied: string;
  location?: string;
  status: string;
  notes?: string;
  work_type: string;
  salary?: string;
  job_url?: string;
  description?: string;
};

export type JobInsertPayload = JobFormData & { id: string };

export type UserIdProps = {
  userId: string;
};

export type JobFormState = {
  message: string;
};

export type Job = {
  id: string;
  position: string;
  company: string;
  date_applied: string;
  location?: string;
  status: string;
  notes?: string;
  work_type: string;
  salary?: string;
  job_url?: string;
  description?: string;
};

export type JobProviderProps = {
  jobs: Job[]; // an array of Job objects (each item matches the Job type)
  children: ReactNode;
};
