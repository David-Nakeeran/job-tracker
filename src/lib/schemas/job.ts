import { z } from "zod";

export const jobSchema = z.object({
  position: z.string().min(1, "Position is required").trim(),
  company: z.string().min(1, "Company is required").trim(),
  date_applied: z.string().min(1, "Date is required"),
  location: z.string().trim().optional(),
  status: z.enum(["applied", "interview", "rejected"]),
  notes: z.string().trim().optional(),
  work_type: z.enum(["full-time", "part-time", "contract"]),
  // Salary input comes as a string from the HTML input, so is first transform it to a number at runtime.
  // The `.pipe(z.number())` tells TypeScript that after the transform, this value is definitely a number,
  // preventing the "unknown is not assignable to number" type error.
  salary: z.transform(Number).pipe(z.number()),
  job_url: z.url("Must be a valid URL").optional().or(z.literal("")),
  description: z.string().trim().optional(),
});

export type JobFormValues = z.infer<typeof jobSchema>;
