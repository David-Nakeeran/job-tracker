import { insertUser, userExists } from "@/lib/users";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function PostSignUpPage() {
  const { userId } = await auth();

  console.log("🚀 PostSignUpPage running. userId:", userId);

  if (!userId) {
    console.log("❌ No userId, redirecting to /sign-in");
    return redirect("/sign-in");
  }

  const exists = await userExists(userId);
  console.log("👀 userExists:", exists);

  if (!exists) {
    await insertUser(userId);
    console.log("✅ Inserted new user into DB:", userId);
    redirect("/dashboard");
  }

  return <></>;
}
