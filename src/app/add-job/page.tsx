import AddJob from "@/components/AddJob";
import { auth } from "@clerk/nextjs/server";

export default async function AddJobPage() {
  const { userId } = await auth();
  return (
    <>
      <AddJob userId={userId} />
    </>
  );
}
