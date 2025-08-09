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
      <form action={formAction}>
        <fieldset>
          <legend>Add a Job</legend>
        </fieldset>
        <p aria-live="polite">{state?.message}</p>
        <button type="submit" disabled={pending}>
          Add a job
        </button>
      </form>
    </>
  );
}
