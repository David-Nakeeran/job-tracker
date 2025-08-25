import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import { SignInButton, SignUpButton, SignedOut } from "@clerk/nextjs";
import LoggedInUserNav from "./LoggedInUserNav";

export default async function Header() {
  const { userId } = await auth();
  return (
    <header className="mb-6">
      <nav className="flex justify-between">
        <Link href={"/"}>
          <p className="text-[#ce2772]">Job Tracker</p>
        </Link>
        <div className="flex justify-between gap-4">
          <SignedOut>
            <SignInButton mode="modal" />
            <SignUpButton mode="modal" />
          </SignedOut>
          {userId && <LoggedInUserNav />}
        </div>
      </nav>
    </header>
  );
}
