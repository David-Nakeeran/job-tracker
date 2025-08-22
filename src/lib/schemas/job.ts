import { z } from "zod";

export const jobSchema = z.object({
  position: z.string().min(1, "Position is required").trim(),
  company: z.string().min(1, "Company is required").trim(),
  date_applied: z.string().min(1, "Date is required"),
  location: z.string().trim().optional(),
  status: z.enum(["applied", "interview", "rejected"]),
  notes: z.string().trim().optional(),
  work_type: z.enum(["full-time", "part-time", "contract"]),
  salary: z.string().optional(),
  job_url: z.url("Must be a valid URL").optional().or(z.literal("")),
  description: z.string().trim().optional(),
});

export type JobFormValues = z.infer<typeof jobSchema>;
