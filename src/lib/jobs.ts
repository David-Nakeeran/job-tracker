"use server";
import { db } from "@/utils/dbConnection";

export async function getUserJobs(userId: string) {
  try {
    const jobs = await db.query(`SELECT * FROM jbt_jobs WHERE user_id = $1`, [
      userId,
    ]);
    return jobs.rows;
  } catch (error) {
    let message = "Unknown Error";
    if (error instanceof Error) message = error.message;
    console.error(message);
    throw error;
  }
}
