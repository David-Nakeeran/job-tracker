"use client";

import { createJob } from "@/lib/actions";
import { UserIdProps } from "@/types/dataTypes";
import { useActionState } from "react";

// Starting value for form's state.
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
      <form
        action={formAction}
        className="max-w-md mx-auto p-6 bg-[#2a2a2c] rounded-md shadow-md"
      >
        <fieldset className="flex flex-col gap-3">
          <legend className="text-[#ce2772] mb-2 center text-center font-bold">
            Add a Job
          </legend>
          <label htmlFor="position">Position</label>
          <input
            className="w-full p-2 rounded-md bg-[#1b1b1d] border border-[#3d3d3f] text-[#e8e8e8] focus:outline-none focus:border-[#ce2772] focus:ring-1 focus:ring-[#ce2772]"
            id="position"
            name="position"
            type="text"
            required
          />

          <label htmlFor="company">Company</label>
          <input
            className="w-full p-2 rounded-md bg-[#1b1b1d] border border-[#3d3d3f] text-[#e8e8e8] focus:outline-none focus:border-[#ce2772] focus:ring-1 focus:ring-[#ce2772]"
            id="company"
            name="company"
            type="text"
            required
          />

          <label htmlFor="date_applied">Date Applied</label>
          <input
            className="w-full p-2 rounded-md bg-[#1b1b1d] border border-[#3d3d3f] text-[#e8e8e8] focus:outline-none focus:border-[#ce2772] focus:ring-1 focus:ring-[#ce2772]"
            id="date_applied"
            name="date_applied"
            type="date"
            required
          />

          <label htmlFor="status">Status</label>
          <select
            className="w-full p-2 rounded-md bg-[#1b1b1d] border border-[#3d3d3f] text-[#e8e8e8] focus:outline-none focus:border-[#ce2772] focus:ring-1 focus:ring-[#ce2772]"
            id="status"
            name="status"
            required
          >
            <option value="" hidden>
              -- Select status --
            </option>
            <option value="applied">Applied</option>
            <option value="interview">Interview</option>
            <option value="rejected">Rejected</option>
          </select>

          <label htmlFor="work_type">Work Type</label>
          <select
            className="w-full p-2 rounded-md bg-[#1b1b1d] border border-[#3d3d3f] text-[#e8e8e8] focus:outline-none focus:border-[#ce2772] focus:ring-1 focus:ring-[#ce2772]"
            id="work_type"
            name="work_type"
            required
          >
            <option value="" hidden>
              -- Select work type --
            </option>
            <option value="full-time">Full-time</option>
            <option value="part-time">Part-time</option>
            <option value="contract">Contract</option>
          </select>

          <label htmlFor="location">Location</label>
          <input
            className="w-full p-2 rounded-md bg-[#1b1b1d] border border-[#3d3d3f] text-[#e8e8e8] focus:outline-none focus:border-[#ce2772] focus:ring-1 focus:ring-[#ce2772]"
            id="location"
            name="location"
            type="text"
          />

          <label htmlFor="salary">Salary</label>
          <input
            className="w-full p-2 rounded-md bg-[#1b1b1d] border border-[#3d3d3f] text-[#e8e8e8] focus:outline-none focus:border-[#ce2772] focus:ring-1 focus:ring-[#ce2772]"
            id="salary"
            name="salary"
            type="text"
          />

          <label htmlFor="job_url">Job URL</label>
          <input
            className="w-full p-2 rounded-md bg-[#1b1b1d] border border-[#3d3d3f] text-[#e8e8e8] focus:outline-none focus:border-[#ce2772] focus:ring-1 focus:ring-[#ce2772]"
            id="job_url"
            name="job_url"
            type="url"
          />

          <label htmlFor="description">Description</label>
          <textarea
            className="w-full p-2 rounded-md bg-[#1b1b1d] border border-[#3d3d3f] text-[#e8e8e8] focus:outline-none focus:border-[#ce2772] focus:ring-1 focus:ring-[#ce2772]"
            id="description"
            name="description"
          ></textarea>

          <label htmlFor="notes">Notes</label>
          <textarea
            className="w-full p-2 rounded-md bg-[#1b1b1d] border border-[#3d3d3f] text-[#e8e8e8] focus:outline-none focus:border-[#ce2772] focus:ring-1 focus:ring-[#ce2772]"
            id="notes"
            name="notes"
          ></textarea>
          <p aria-live="polite">{state?.message}</p>
          <button
            className="cursor-pointer mt-4 w-full py-2 px-4 rounded-md bg-[#ce2772] text-white font-semibold hover:bg-[#a81f5c] hover:scale-105 transform transition-colors duration-200 disabled:opacity-50"
            type="submit"
            disabled={pending}
          >
            {pending ? "Adding..." : "Add a job"}
          </button>
        </fieldset>
      </form>
    </>
  );
}
