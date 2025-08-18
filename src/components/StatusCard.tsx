"use client";
import { StatusCardProps } from "@/types/dataTypes";
import { useState } from "react";

export default function StatusCard({
  status,
  count,
  children,
}: StatusCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-[#2a2a2c] text-[#e8e8e8] border border-[#3d3d3f] rounded shadow-md transition-all duration-200 hover:border-[#ce2772]">
      <button
        className="w-full flex justify-between p-4 focus:outline-none focus:ring-2 focus:ring-[#ce2772] transition-colors cursor-pointer transform"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-[#ce2772] font-semibold">{status}</span>
        <span>{count}</span>
      </button>
      {isOpen && (
        <div className="bg-[#1b1b1d] border-t border-[#3d3d3f] p-4 text-[#e8e8e8]">
          {children}
        </div>
      )}
    </div>
  );
}
