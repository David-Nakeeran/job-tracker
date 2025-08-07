"use client";

import { SignedIn, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { useState } from "react";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen(!isOpen);

  return (
    <div>
      <button
        onClick={handleClick}
        className="flex flex-col justify-center items-center w-8 h-8"
      >
        <span
          className={`bg-gray-800 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "rotate-45 translate-y-1.5" : "-translate-y-1.5"
          }`}
        ></span>
        <span
          className={`bg-gray-800 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-1 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-gray-800 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "-rotate-45 -translate-y-1.5" : "translate-y-1.5"
          }`}
        ></span>
      </button>
      {isOpen ? (
        <div className="absolute top-12 left-0 w-full bg-white shadow-md z-50 p-4 flex flex-col gap-3">
          <SignedIn>
            <UserButton />
          </SignedIn>
          <Link href={"/dashboard"} className="font-medium">
            Dashboard
          </Link>
          <Link href={"/add-job"} className="font-medium">
            Add a job
          </Link>
        </div>
      ) : null}
    </div>
  );
}
