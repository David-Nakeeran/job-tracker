import { Job, JobProps } from "@/types/types";
import JobCard from "./JobCard";

export default function JobList({ jobs, colour }: JobProps) {
  //loop through jobs arr and pass props to JobCards
  const jobElements = jobs.map((job) => {
    return (
      <JobCard
        key={job.id}
        jobId={job.id}
        position={job.position}
        company={job.company}
        status={job.status}
        date_applied={job.date_applied}
        location={job.location}
        notes={job.notes}
        work_type={job.work_type}
        salary={job.salary}
        job_url={job.job_url}
        description={job.description}
        colour={colour}
      />
    );
  });
  return (
    <div className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 gap-4">
      {jobElements}
    </div>
  );
}
