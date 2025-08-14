"use client";
import { JobProvider } from "./context/JobContext";
import { JobProviderProps } from "./types/dataTypes";

export default function Providers({ children, jobs }: JobProviderProps) {
  return <JobProvider jobs={jobs}>{children}</JobProvider>;
}
