"use client";
import { useJobs } from "@/context/JobContext";
import JobCard from "./JobCard";
import StatusCard from "./StatusCard";

export default function DashboardContent() {
  const jobs = useJobs();

  //filter jobs by status
  const statusApplied = jobs.filter((job) => job.status === "applied");

  const statusInterview = jobs.filter((job) => job.status === "interview");

  const statusRejected = jobs.filter((job) => job.status === "rejected");

  // pass to components
  return (
    <>
      <h1>Dashboard content</h1>
      <StatusCard status="Applied" count={statusApplied.length}>
        <JobCard />
      </StatusCard>
      <StatusCard status="Interview" count={statusInterview.length}>
        <JobCard />
      </StatusCard>
      <StatusCard status="Rejected" count={statusRejected.length}>
        <JobCard />
      </StatusCard>
    </>
  );
}
