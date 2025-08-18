import { JobCardProps } from "@/types/dataTypes";

export default function JobCard({
  position,
  company,
  status,
  date_applied,
  location,
  notes,
  work_type,
  salary,
  job_url,
  description,
}: JobCardProps) {
  return (
    <>
      <h1>JobCard</h1>
      <p>{position}</p>
      <p>{company}</p>
      <p>Status: {status}</p>
      <p>Applied: {date_applied}</p>
      {location && <p>{location}</p>}
      {salary && <p>{salary}</p>}
      {job_url && <a href={job_url}>Job Link</a>}
      {description && <p>{description}</p>}
      {notes && <p>{notes}</p>}
      <p>Type: {work_type}</p>
    </>
  );
}
