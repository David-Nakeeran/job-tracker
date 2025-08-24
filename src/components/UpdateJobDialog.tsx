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
import { createJob, updateJob } from "@/lib/actions";
import { JobCardProps, UserIdProps } from "@/types/types";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { jobSchema, JobFormValues } from "@/lib/schemas/job";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

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
  // UI messages (success/error) from server action
  const [formMessage, setFormMessage] = useState<string>("");

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
    setFormMessage(""); // Clear old message
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
      <form>
        <DialogTrigger asChild>
          <Button>Update Job</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Update Job</DialogTitle>
          </DialogHeader>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="max-w-md mx-auto p-6 bg-[#2a2a2c] rounded-md shadow-md"
            >
              <h2 className="text-[#ce2772] text-center font-bold">
                Add a Job
              </h2>

              <FormField
                control={form.control}
                name="position"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Position</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Software Engineer"
                        className="bg-[#1b1b1d] border-[#3d3d3f] text-[#e8e8e8] focus:outline-none focus:border-[#ce2772] focus:ring-1 focus:ring-[#ce2772]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage /> {/* shows Zod error if any */}
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Company Ltd"
                        className="bg-[#1b1b1d] border-[#3d3d3f] text-[#e8e8e8] focus:outline-none focus:border-[#ce2772] focus:ring-1 focus:ring-[#ce2772]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="status"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Status</FormLabel>
                    <FormControl>
                      <select
                        className="w-full p-2 rounded-md bg-[#1b1b1d] border border-[#3d3d3f] text-[#e8e8e8] focus:outline-none focus:border-[#ce2772] focus:ring-1 focus:ring-[#ce2772]"
                        {...field}
                      >
                        <option value="applied">Applied</option>
                        <option value="interview">Interview</option>
                        <option value="rejected">Rejected</option>
                      </select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="work_type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Work Type</FormLabel>
                    <FormControl>
                      <select
                        className="w-full p-2 rounded-md bg-[#1b1b1d] border border-[#3d3d3f] text-[#e8e8e8] focus:outline-none focus:border-[#ce2772] focus:ring-1 focus:ring-[#ce2772]"
                        {...field}
                      >
                        <option value="full-time">Full-time</option>
                        <option value="part-time">Part-time</option>
                        <option value="contract">Contract</option>
                      </select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="date_applied"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Date Applied</FormLabel>
                    <FormControl>
                      <Input
                        type="date"
                        className="bg-[#1b1b1d] border-[#3d3d3f] text-[#e8e8e8] focus:outline-none focus:border-[#ce2772] focus:ring-1 focus:ring-[#ce2772]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Location</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Remote / London"
                        className="bg-[#1b1b1d] border-[#3d3d3f] text-[#e8e8e8] focus:outline-none focus:border-[#ce2772] focus:ring-1 focus:ring-[#ce2772]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="salary"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Salary</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Salary (Leave as 0 if unknown)"
                        className="bg-[#1b1b1d] border-[#3d3d3f] text-[#e8e8e8] focus:outline-none focus:border-[#ce2772] focus:ring-1 focus:ring-[#ce2772]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="job_url"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Job Url</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="http://www.google.com"
                        className="bg-[#1b1b1d] border-[#3d3d3f] text-[#e8e8e8] focus:outline-none focus:border-[#ce2772] focus:ring-1 focus:ring-[#ce2772]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Role description / responsibilities"
                        className="bg-[#1b1b1d] border-[#3d3d3f] text-[#e8e8e8] focus:outline-none focus:border-[#ce2772] focus:ring-1 focus:ring-[#ce2772]"
                        rows={4}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="notes"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Notes</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Notes"
                        className="bg-[#1b1b1d] border-[#3d3d3f] text-[#e8e8e8] focus:outline-none focus:border-[#ce2772] focus:ring-1 focus:ring-[#ce2772]"
                        rows={4}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {formMessage && toast(formMessage)}
              <Button
                className="cursor-pointer mt-4 w-full py-2 px-4 rounded-md bg-[#ce2772] text-white font-semibold hover:bg-[#a81f5c] hover:scale-105 transform transition-colors duration-200 disabled:opacity-50"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Updating..." : "Update a job"}
              </Button>
            </form>
          </Form>
        </DialogContent>
      </form>
    </Dialog>
  );
}
