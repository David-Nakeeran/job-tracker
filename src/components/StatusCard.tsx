"use client";

import { ReactNode } from "react";
import { useState } from "react";
import { colourMap, ColourKey } from "@/lib/colourMap";

type StatusCardProps = {
  status: string;
  count: number;
  colour: ColourKey; // only accepts "yellow" | "green" | "red"
  children: ReactNode;
};

export default function StatusCard({
  status,
  count,
  colour,
  children,
}: StatusCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const colours = colourMap[colour];
  return (
    <div
      className={`bg-[#2a2a2c] text-[#e8e8e8] border-2  rounded shadow-md transition-all duration-200 ${
        colours.text
      }
      ${isOpen ? colours.border : "border-[#3d3d3f]"}
      ${!isOpen && colours.hover}
      `}
    >
      <button
        className="w-full p-4 focus:outline-none focus:ring-2  transition-colors cursor-pointer transform"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center justify-between w-full">
          <p className={"font-semibold text-2xl"}>{status}</p>
          <p className="text-lg">{count}</p>
        </div>
      </button>
      {isOpen && (
        <div className="bg-[#1b1b1d] border-t border-[#3d3d3f] p-4 text-[#e8e8e8]">
          {children}
        </div>
      )}
    </div>
  );
}
