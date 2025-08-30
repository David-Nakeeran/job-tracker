"use client";
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
import { Button } from "@/components/ui/button";
import { UseFormReturn } from "react-hook-form";
import { JobFormValues } from "@/lib/schemas/job";

type JobFormProps = {
  form: UseFormReturn<JobFormValues>;
  onSubmit: (values: JobFormValues) => Promise<void>;
  submitLabel: string;
  isSubmitting: boolean;
  formLabel: string;
};

export default function JobForm({
  form,
  onSubmit,
  submitLabel = "Submit",
  isSubmitting,
  formLabel,
}: JobFormProps) {
  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="max-w-md mx-auto p-6 bg-[#2a2a2c] rounded-md shadow-md flex flex-col gap-4 w-full"
        >
          <h2 className="text-center font-bold text-[#b388ff]">{formLabel}</h2>

          <FormField
            control={form.control}
            name="position"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Position<span className="text-red-600">*</span>
                </FormLabel>
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
                <FormLabel>
                  Company<span className="text-red-600">*</span>
                </FormLabel>
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
                <FormLabel>
                  Date Applied<span className="text-red-600">*</span>
                </FormLabel>
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
          <Button
            className="cursor-pointer font-semibold mt-4 w-full py-2 px-4 bg-[#b388ff] p-4 rounded-md shadow-lg hover:bg-[#9b6bff] hover:scale-105 transform transition-colors duration-200 disabled:opacity-50"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : submitLabel}
          </Button>
        </form>
      </Form>
    </>
  );
}
