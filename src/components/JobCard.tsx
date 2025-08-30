import { JobCardProps } from "@/types/types";
import { DeleteAlertDialog } from "./DeleteAlertDialog";
import UpdateJobDialog from "./UpdateJobDialog";
import { ColourKey, colourMap } from "@/lib/colourMap";

export default function JobCard({
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
  colour,
}: JobCardProps & { colour: ColourKey }) {
  const colours = colourMap[colour];
  return (
    <div
      className={`bg-[#1b1b1d] border border-[#3d3d3f] rounded-xl shadow-md p-4 space-y-3 transition-all duration-200 ${colours.cardHover}`}
    >
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">{position}</h2>
      </div>
      <div>
        <span className={`${colours.statusCapsule} text-sm px-2 py-1 `}>
          Status: {status}
        </span>
      </div>
      <p className="text-sm text-gray-400">
        {company} {location && `• ${location}`}
      </p>

      <div className="flex flex-col gap-2 text-sm text-[#e8e8e8]/80 space-y-1">
        <p>Applied: {new Date(date_applied).toLocaleDateString("en-GB")}</p>
        {salary && <p>Salary: £{salary}</p>}
        <p>Type: {work_type}</p>
      </div>
      {description && (
        <p className="text-sm text-[#e8e8e8] bg-[#2a2a2c] p-2 rounded line-clamp-3">
          {description}
        </p>
      )}
      {notes && (
        <p className="text-sm text-[#e8e8e8]/80 italic bg-[#2a2a2c] p-2 rounded line-clamp-3">
          {notes}
        </p>
      )}
      {job_url && (
        <a
          href={job_url}
          target="_blank"
          className="block text-[#ce2772] hover:text-[#a81f5c] underline text-sm mt-2"
        >
          Job Link
        </a>
      )}
      <div className="flex flex-col md:flex-row gap-2 justify-between mt-4">
        <UpdateJobDialog
          jobId={jobId}
          position={position}
          company={company}
          status={status}
          date_applied={date_applied}
          location={location}
          notes={notes}
          work_type={work_type}
          salary={salary}
          job_url={job_url}
          description={description}
        />
        <DeleteAlertDialog jobId={jobId} />
      </div>
    </div>
  );
}
