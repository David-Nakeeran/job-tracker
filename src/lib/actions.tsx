"use server";
import { db } from "@/utils/dbConnection";
import { revalidatePath } from "next/cache";
import { JobFormValues, jobSchema } from "./schemas/job";
import { z } from "zod";

export async function createJob(id: string, values: JobFormValues) {
  // Server validation
  const result = jobSchema.safeParse(values);

  if (!result.success) {
    const { fieldErrors, formErrors } = z.flattenError(result.error);

    const errorMessages = [...Object.values(fieldErrors).flat(), ...formErrors];

    return { success: false as const, errorMessages };
  }

  try {
    await db.query(
      `INSERT INTO jbt_jobs (position, company, date_applied, location, status, notes, work_type, salary, job_url, description, user_id) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)`,
      [
        result.data.position,
        result.data.company,
        result.data.date_applied,
        result.data.location,
        result.data.status,
        result.data.notes,
        result.data.work_type,
        result.data.salary,
        result.data.job_url,
        result.data.description,
        id,
      ]
    );
    revalidatePath("/dashboard");
    return { success: true as const, message: "Job added successfully!" };
  } catch (error) {
    let errorMessage = "Failed to add job";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    console.error(errorMessage);
    return { success: false as const, message: errorMessage };
  }
}

export async function updateJob(jobId: number, values: JobFormValues) {
  // Server validation
  const result = jobSchema.safeParse(values);

  if (!result.success) {
    const { fieldErrors, formErrors } = z.flattenError(result.error);

    const errorMessages = [...Object.values(fieldErrors).flat(), ...formErrors];

    return { success: false as const, errorMessages };
  }

  try {
    await db.query(
      `UPDATE jbt_jobs SET position = $1, company = $2, date_applied = $3, location = $4, status = $5, notes = $6, work_type = $7, salary = $8, job_url = $9, description = $10 WHERE id = $11`,
      [
        result.data.position,
        result.data.company,
        result.data.date_applied,
        result.data.location,
        result.data.status,
        result.data.notes,
        result.data.work_type,
        result.data.salary,
        result.data.job_url,
        result.data.description,
        jobId,
      ]
    );
    revalidatePath("/dashboard");
    return { success: true as const, message: "Job updated successfully!" };
  } catch (error) {
    let errorMessage = "Error updating job";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    console.error(errorMessage);
    return { success: false as const, message: errorMessage };
  }
}

export async function deleteJob(jobId: number) {
  try {
    await db.query(
      `
    DELETE FROM jbt_jobs WHERE id = $1`,
      [jobId]
    );
    revalidatePath("/dashboard");
    return { success: true as const, message: "Deleted job successfully!" };
  } catch (error) {
    let errorMessage = "Error deleting job";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    console.error(errorMessage);
    return { success: false as const, message: errorMessage };
  }
}
