"use client";

import { SignedIn, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { useState } from "react";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);

  return (
    <div>
      <button
        onClick={handleClick}
        className="flex flex-col justify-center items-center w-8 h-8"
      >
        <span
          className={`bg-[#ce2772] block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "rotate-45 translate-y-1.5" : "-translate-y-1.5"
          }`}
        ></span>
        <span
          className={`bg-[#ce2772] block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-1 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-[#ce2772] block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "-rotate-45 -translate-y-1.5" : "translate-y-1.5"
          }`}
        ></span>
      </button>
      {isOpen ? (
        <div className="absolute top-12 right-0 w-1/2 bg-[#2a2a2c] shadow-md z-50 p-4 flex flex-col items-center gap-3 border border-[#ce2772] rounded-2xl">
          <SignedIn>
            <UserButton />
          </SignedIn>
          <Link
            href={"/dashboard"}
            className="font-medium hover:underline"
            onClick={closeMenu}
          >
            Dashboard
          </Link>
          <Link
            href={"/add-job"}
            className="font-medium hover:underline"
            onClick={closeMenu}
          >
            Add a job
          </Link>
        </div>
      ) : null}
    </div>
  );
}
