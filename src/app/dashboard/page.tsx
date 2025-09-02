import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { getUserJobs } from "@/lib/jobs";
import DashboardContent from "@/components/DashboardContent";
import Providers from "@/Providers";

export default async function DashboardPage() {
  const { userId } = await auth();

  if (!userId) {
    return redirect("/sign-in");
  }

  const jobs = (await getUserJobs(userId)) || [];

  return (
    <Providers jobs={jobs}>
      <DashboardContent userId={userId} />
    </Providers>
  );
}
