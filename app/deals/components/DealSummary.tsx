export default function DealSummary({ summary }: any) {
  return (
    <div className="border rounded ui-card p-3 mb-3 bg-white">
      <div className="flex justify-between items-center">
        <div className="text-sm text-gray-600">
          Deal Status
        </div>
        <span
          className={`px-2 py-1 rounded ui-card text-xs
            ${summary.status === "closed"
              ? "bg-gray-200 text-gray-700"
              : "bg-green-100 text-[var(--brand-green)]"
            }`}
        >
          {summary.status || "open"}
        </span>
      </div>
    </div>
  );
}
