"use client";

import { createJob } from "@/lib/actions";
import { UserIdProps } from "@/types/dataTypes";

export default function AddJob({ userId }: UserIdProps) {
  const createJobWithId = createJob.bind(null, userId);
  return (
    <>
      <form>
        <fieldset>
          <legend>Add a Job</legend>
        </fieldset>
      </form>
    </>
  );
}
