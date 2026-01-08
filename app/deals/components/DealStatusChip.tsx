export default function DealStatusChip({ status }: { status: string }) {
  const color =
    status === "ACTIVE"
      ? "bg-green-100 text-green-700"
      : status === "CLOSED"
      ? "bg-gray-200 text-gray-600"
      : "bg-red-100 text-red-700";

  return (
    <span className={`px-3 py-1 text-xs rounded-full ${color}`}>
      {status}
    </span>
  );
}
