"use client";
import { useJobs } from "@/context/JobContext";
import StatusCard from "./StatusCard";
import JobList from "./JobList";

export default function DashboardContent() {
  const jobs = useJobs();

  //filter jobs by status
  const statusApplied = jobs.filter((job) => job.status === "applied");

  const statusInterview = jobs.filter((job) => job.status === "interview");

  const statusRejected = jobs.filter((job) => job.status === "rejected");

  // pass to components
  return (
    <section className="flex flex-col gap-3">
      <StatusCard status="Applied" count={statusApplied.length}>
        <JobList jobs={statusApplied} />
      </StatusCard>
      <StatusCard status="Interview" count={statusInterview.length}>
        <JobList jobs={statusInterview} />
      </StatusCard>
      <StatusCard status="Rejected" count={statusRejected.length}>
        <JobList jobs={statusRejected} />
      </StatusCard>
    </section>
  );
}
