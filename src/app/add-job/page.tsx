import AddJob from "@/components/AddJob";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function AddJobPage() {
  const { userId } = await auth();

  if (!userId) {
    return redirect("/sign-in");
  }

  return (
    <>
      <AddJob userId={userId} />
    </>
  );
}
