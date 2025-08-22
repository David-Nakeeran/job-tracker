"use server";
import { UserIdProps } from "@/types/types";
import { db } from "@/utils/dbConnection";

export async function userExists(userId: string) {
  try {
    const result = await db.query(`SELECT * FROM jbt_users WHERE id = $1`, [
      userId,
    ]);
    if (result.rows.length === 0) {
      return false;
    }
    return true;
  } catch (error) {
    throw error;
  }
}

export async function insertUser(userId: string) {
  try {
    await db.query(`INSERT INTO jbt_users (id) VALUES($1)`, [userId]);
  } catch (error) {
    throw error;
  }
}
