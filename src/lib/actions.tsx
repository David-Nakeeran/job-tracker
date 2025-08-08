"use server";
import { db } from "@/utils/dbConnection";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { JobFormData, JobInsertPayload } from "@/types/dataTypes";

export async function createJob(id: string, formData: FormData) {
  // Note: 'as JobFormData' tells TypeScript to trust this shape but does not validate at runtime.
  const data = Object.fromEntries(formData) as JobFormData;

  // Combine the id with the form data, now fully typed as JobInsertPayload
  const jobData: JobInsertPayload = {
    id,
    ...data,
  };

  await db.query(
    `INSERT INTO jbt_jobs (position, company, date_applied, location, status, notes, work_type, salary, job_url, description, user_id) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)`,
    [
      jobData.position,
      jobData.company,
      jobData.date_applied,
      jobData.location,
      jobData.status,
      jobData.notes,
      jobData.work_type,
      jobData.salary,
      jobData.job_url,
      jobData.description,
      jobData.id,
    ]
  );

  revalidatePath("/dashboard");
  redirect("/dashboard");
}
