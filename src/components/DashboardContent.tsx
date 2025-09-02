"use client";
import { useJobs } from "@/context/JobContext";
import StatusCard from "./StatusCard";
import JobList from "./JobList";
import AddJobDialog from "./AddJobDialog";
import { UserIdProps } from "@/types/types";

export default function DashboardContent({ userId }: UserIdProps) {
  const jobs = useJobs();

  //filter jobs by status
  const statusApplied = jobs.filter((job) => job.status === "applied");

  const statusInterview = jobs.filter((job) => job.status === "interview");

  const statusRejected = jobs.filter((job) => job.status === "rejected");

  // pass to components
  return (
    <section className="max-w-5xl mx-auto flex flex-col gap-3 md:">
      <div className="flex justify-end">
        <AddJobDialog userId={userId} />
      </div>
      <StatusCard status="Applied" count={statusApplied.length} colour="yellow">
        <JobList jobs={statusApplied} colour="yellow" />
      </StatusCard>
      <StatusCard
        status="Interview"
        count={statusInterview.length}
        colour="green"
      >
        <JobList jobs={statusInterview} colour="green" />
      </StatusCard>
      <StatusCard status="Rejected" count={statusRejected.length} colour="red">
        <JobList jobs={statusRejected} colour="red" />
      </StatusCard>
    </section>
  );
}
