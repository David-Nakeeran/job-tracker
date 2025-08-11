"use client";

import { createJob } from "@/lib/actions";
import { UserIdProps } from "@/types/dataTypes";
import { useActionState } from "react";

// This is the starting value for our form's state.
// 'message' will be updated later based on what createJob returns.
const initialState = {
  message: "",
};
export default function AddJob({ userId }: UserIdProps) {
  /**
   * useActionState:
   * - Given action function (createJob bound with userId)
   * - Given initial state
   *   1. `state` → whatever action returns (starting as initialState)
   *   2. `formAction` → <form action={formAction}>
   *   3. `pending` → true while the action is running
   *
   * When the form is submitted:
   *   - `formAction` calls `createJob`
   *   - The object returned from `createJob` replaces `state`
   *   - That means state.message will show success/error message
   */
  const [state, formAction, pending] = useActionState(
    createJob.bind(null, userId), // bind userId so createJob knows the user
    initialState
  );

  return (
    <>
      <form action={formAction} className="max-w-md mx-auto p-6">
        <fieldset className="flex flex-col gap-3">
          <legend>Add a Job</legend>
          <label htmlFor="position">Position</label>
          <input id="position" name="position" type="text" required />

          <label htmlFor="company">Company</label>
          <input id="company" name="company" type="text" required />

          <label htmlFor="date_applied">Date Applied</label>
          <input id="date_applied" name="date_applied" type="date" required />

          <label htmlFor="status">Status</label>
          <select id="status" name="status" required>
            <option value="" hidden>
              -- Select status --
            </option>
            <option value="applied">Applied</option>
            <option value="interview">Interview</option>
            <option value="rejected">Rejected</option>
          </select>

          <label htmlFor="work_type">Work Type</label>
          <select id="work_type" name="work_type" required>
            <option value="" hidden>
              -- Select work type --
            </option>
            <option value="full-time">Full-time</option>
            <option value="part-time">Part-time</option>
            <option value="contract">Contract</option>
          </select>

          <label htmlFor="location">Location</label>
          <input id="location" name="location" type="text" />

          <label htmlFor="salary">Salary</label>
          <input id="salary" name="salary" type="text" />

          <label htmlFor="job_url">Job URL</label>
          <input id="job_url" name="job_url" type="url" />

          <label htmlFor="description">Description</label>
          <textarea id="description" name="description"></textarea>

          <label htmlFor="notes">Notes</label>
          <textarea id="notes" name="notes"></textarea>
          <p aria-live="polite">{state?.message}</p>
          <button type="submit" disabled={pending}>
            Add a job
          </button>
        </fieldset>
      </form>
    </>
  );
}
