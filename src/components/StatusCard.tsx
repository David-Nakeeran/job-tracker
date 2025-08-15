import { StatusCardProps } from "@/types/dataTypes";

export default function StatusCard({
  status,
  count,
  children,
}: StatusCardProps) {
  return (
    <>
      <h1>StatusCard</h1>
      <h2>{status}</h2>
      <p>{count}</p>
      {children}
    </>
  );
}
