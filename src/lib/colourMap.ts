export const colourMap = {
  yellow: {
    text: "text-yellow-500",
    border: "border-yellow-500",
    hover: "hover:border-yellow-500",
    cardHover: "hover:border-yellow-300",
    statusCapsule: "border border-yellow-500 text-yellow-500 rounded-full",
  },
  green: {
    text: "text-green-500",
    border: "border-green-500",
    hover: "hover:border-green-500",
    cardHover: "hover:border-green-300",
    statusCapsule: "border border-green-500 text-green-500 rounded-full",
  },
  red: {
    text: "text-red-500",
    border: "border-red-500",
    hover: "hover:border-red-500",
    cardHover: "hover:border-red-400",
    statusCapsule: "border border-red-500 text-red-500 rounded-full",
  },
} as const;

export type ColourKey = keyof typeof colourMap;
// Equivalent to: "yellow" | "green" | "red"
