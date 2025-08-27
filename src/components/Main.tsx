import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import { NotebookPen, Folders, SquarePen } from "lucide-react";

export default async function Main() {
  const { userId } = await auth();
  return (
    <main>
      <h1 className="text-4xl ont-extrabold text-center mb-6">
        Track your job applications with ease
      </h1>
      <h3 className="text-lg font-semibold mb-8">
        Stop juggling spreadsheets. Our job tracker makes it simple to record,
        update, and organise every job you apply for all in one place.
      </h3>
      <div className="flex flex-col sm:flex-row sm:items-center text-center text-lg font-semibold gap-4 mb-8">
        <Link
          href={userId ? "/dashboard" : "/sign-in"}
          className="bg-[#b388ff] p-4 rounded-3xl shadow-lg hover:bg-[#9b6bff] transition"
        >
          Get Started
        </Link>
        <Link
          href={"#how-it-works"}
          className="border border-[#b388ff] text-[#b388ff] p-4 rounded-3xl shadow-lg hover:shadow-[0_0_10px_#b388ff] transition"
        >
          How it Works
        </Link>
      </div>
      <section
        id="how-it-works"
        className="bg-[#2a2a3c] border border-[#b388ff] rounded-2xl p-8 shadow-lg"
      >
        <h3 className="text-center text-2xl font-bold mb-6 underline">
          How it Works
        </h3>
        <div className="flex flex-col gap-6">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <NotebookPen size={24} className="text-[#b388ff]" />
              <p className="text-lg font-semibold">Add your applications</p>
            </div>
            <p className="text-[#a9a9b3]">
              Quickly log the jobs you’ve applied for with details like role,
              company, and notes.
            </p>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-1">
              <Folders size={24} className="text-[#8898ff]" />
              <p className="text-lg font-semibold">Stay organised</p>
            </div>
            <p className="text-[#a9a9b3]">
              See the progress of your applications at a glance with clear
              categories: Applied, Interview, or Rejected.
            </p>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-1">
              <SquarePen size={24} className="text-[#f5ff88]" />
              <p className="text-lg font-semibold">Update and manage</p>
            </div>
            <p className="text-[#a9a9b3]">
              Edit application details as things change, or delete old ones to
              keep your list tidy.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
