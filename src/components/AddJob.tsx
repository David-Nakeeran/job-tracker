"use client";

import { createJob } from "@/lib/actions";
import { UserIdProps } from "@/types/types";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { jobSchema, JobFormValues } from "@/lib/schemas/job";
import { Button } from "@/components/ui/button";
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

export default function AddJob({ userId }: UserIdProps) {
  // UI messages (success/error) from server action
  const [formMessage, setFormMessage] = useState<string>("");

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
      salary: "",
      job_url: "",
      description: "",
      notes: "",
    },
  });

  async function onSubmit(values: JobFormValues) {
    setFormMessage(""); // Clear old message
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
        salary: "",
        job_url: "",
        description: "",
        notes: "",
      });
      setFormMessage(response.message || "");
      // toast.....
    } else {
      setFormMessage(response.message || "");
    }
    setIsSubmitting(false);
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="max-w-md mx-auto p-6 bg-[#2a2a2c] rounded-md shadow-md"
        >
          <h2 className="text-[#ce2772] text-center font-bold">Add a Job</h2>

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
                    placeholder="Salary"
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
          {formMessage && <p aria-live="polite">{formMessage}</p>}
          <Button
            className="cursor-pointer mt-4 w-full py-2 px-4 rounded-md bg-[#ce2772] text-white font-semibold hover:bg-[#a81f5c] hover:scale-105 transform transition-colors duration-200 disabled:opacity-50"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Adding..." : "Add a job"}
          </Button>
        </form>
      </Form>
    </>
  );
}
