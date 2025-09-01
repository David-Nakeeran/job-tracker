"use client";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogHeader,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { createJob } from "@/lib/actions";
import { UserIdProps } from "@/types/types";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { jobSchema, JobFormValues } from "@/lib/schemas/job";
import { toast } from "sonner";
import JobForm from "./JobForm";

export default function UpdateJobDialog({ userId }: UserIdProps) {
  // Modal state
  const [isOpen, setIsOpen] = useState(false);

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
      setIsOpen(false);
    } else {
      toast.error(response.message);
    }
    setIsSubmitting(false);
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="bg-[#b388ff] text-white hover:bg-[#8b5cf6]">
          Add Job
        </Button>
      </DialogTrigger>
      <DialogContent
        className="bg-[#2a2a2c] border-[#b388ff] h-dvh md:h-[90%] overflow-auto sm:w-[80%] md:w-[50%] max-w-md
        [&_[data-slot='dialog-close']>svg]:!w-5
    [&_[data-slot='dialog-close']>svg]:!h-5
    [&_*[data-slot='dialog-close']]:text-purple-500"
      >
        <DialogHeader>
          <span className="sr-only">
            <DialogTitle>Add Job</DialogTitle>
          </span>
        </DialogHeader>
        <JobForm
          form={form}
          onSubmit={onSubmit}
          submitLabel="Add Job"
          isSubmitting={isSubmitting}
          formLabel="Add Job"
        />
      </DialogContent>
    </Dialog>
  );
}
