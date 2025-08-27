"use client";
import { format } from "date-fns";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogHeader,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { updateJob } from "@/lib/actions";
import { JobCardProps } from "@/types/types";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { jobSchema, JobFormValues } from "@/lib/schemas/job";
import { toast } from "sonner";
import JobForm from "./JobForm";

export default function UpdateJobDialog({
  jobId,
  position,
  company,
  status,
  date_applied,
  location,
  notes,
  work_type,
  salary,
  job_url,
  description,
}: JobCardProps) {
  // Modal state
  const [isOpen, setIsOpen] = useState(false);

  // Manage pending/disabled state during async submit
  const [isSubmitting, setIsSubmitting] = useState(false);
  // RHF
  const form = useForm<JobFormValues>({
    resolver: zodResolver(jobSchema),
    defaultValues: {
      position: position,
      company: company,
      status: status,
      work_type: work_type,
      date_applied: format(date_applied, "yyyy-MM-dd"),
      location: location,
      salary: salary,
      job_url: job_url,
      description: description,
      notes: notes,
    },
  });

  async function onSubmit(values: JobFormValues) {
    setIsSubmitting(true);

    const response = await updateJob(jobId, values);

    if (response.success) {
      toast.success(response.message);
      setIsOpen(false);
    } else {
      toast.error(response.message);
    }
    setIsSubmitting(false);
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button>Update Job</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Update Job</DialogTitle>
        </DialogHeader>
        <JobForm
          form={form}
          onSubmit={onSubmit}
          submitLabel="Update Job"
          isSubmitting={isSubmitting}
        />
      </DialogContent>
    </Dialog>
  );
}
