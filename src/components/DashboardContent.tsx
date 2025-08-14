import { useJobs } from "@/context/JobContext";

export default function DashboardContent() {
  const jobs = useJobs();

  //filter jobs by status
  // pass to components
  return (
    <>
      <h1>Dashboard content</h1>
    </>
  );
}
