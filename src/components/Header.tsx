import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import { SignInButton, SignUpButton, SignedOut } from "@clerk/nextjs";
import LoggedInUserNav from "./LoggedInUserNav";
import { CalendarCheck } from "lucide-react";

export default async function Header() {
  const { userId } = await auth();
  return (
    <header className="mb-8">
      <nav className="flex justify-between">
        <Link href={"/"} className="flex gap-1 items-center">
          <CalendarCheck size={24} className="text-[#b388ff]" />
          <p className="text-2xl text-[#b388ff]">Job Tracker</p>
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
