import { insertUser, userExists } from "@/lib/users";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function PostSignUpPage() {
  const { userId } = await auth();

  if (!userId) {
    return redirect("/sign-in");
  }

  const exists = await userExists(userId);

  if (!exists) {
    await insertUser(userId);
    redirect("/dashboard");
  }

  return <></>;
}
