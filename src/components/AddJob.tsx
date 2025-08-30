"use client";

import { createJob } from "@/lib/actions";
import { UserIdProps } from "@/types/types";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { jobSchema, JobFormValues } from "@/lib/schemas/job";
import { toast } from "sonner";
import JobForm from "./JobForm";

export default function AddJob({ userId }: UserIdProps) {
  // Manage pending/disabled state during async submit
  const [isSubmitting, setIsSubmitting] = useState(false);

  // RHF
  const form = useForm<JobFormValues>({
    resolver: zodResolver(jobSchema),
    defaultValues: {
      position: "",
      company: "",
      status: "applied",
      work_type: "full-time",
      date_applied: "",
      location: "",
      salary: 0,
      job_url: "",
      description: "",
      notes: "",
    },
  });

  async function onSubmit(values: JobFormValues) {
    setIsSubmitting(true);

    const response = await createJob(userId, values);

    if (response.success) {
      form.reset({
        position: "",
        company: "",
        status: "applied",
        work_type: "full-time",
        date_applied: "",
        location: "",
        salary: 0,
        job_url: "",
        description: "",
        notes: "",
      });
      toast.success(response.message);
    } else {
      toast.error(response.message);
    }
    setIsSubmitting(false);
  }

  return (
    <JobForm
      form={form}
      onSubmit={onSubmit}
      submitLabel="Add Job"
      isSubmitting={isSubmitting}
      formLabel="Add Job"
    />
  );
}
