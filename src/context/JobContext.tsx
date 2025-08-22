"use client";
import { Job, JobProviderProps } from "@/types/types";
import { createContext, use, useContext } from "react";

const JobContext = createContext<Job[]>([]);
// JobContext will always provide a value shaped like Job[] (an array of jobs)

export function JobProvider({ children, jobs }: JobProviderProps) {
  return <JobContext.Provider value={jobs}>{children}</JobContext.Provider>;
}

export function useJobs() {
  return useContext(JobContext);
}
