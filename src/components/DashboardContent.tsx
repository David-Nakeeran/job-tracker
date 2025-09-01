"use client";
import { useJobs } from "@/context/JobContext";
import StatusCard from "./StatusCard";
import JobList from "./JobList";
import { useAuth } from "@clerk/nextjs";
import AddJobDialog from "./AddJobDialog";
import { redirect } from "next/navigation";

export default function DashboardContent() {
  const { userId } = useAuth();

  // Guard clause: ensures userId is always a string (not null/undefined)
  // Redirects unauthenticated users before rendering dashboard
  if (!userId) {
    redirect("/sign-in");
  }

  const jobs = useJobs();

  //filter jobs by status
  const statusApplied = jobs.filter((job) => job.status === "applied");

  const statusInterview = jobs.filter((job) => job.status === "interview");

  const statusRejected = jobs.filter((job) => job.status === "rejected");

  // pass to components
  return (
    <section className="flex flex-col gap-3">
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
