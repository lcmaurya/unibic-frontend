import { getActiveProvider } from "@/app/lib/dealController";

export default function DealHeader({ deal }: any) {
  const provider = getActiveProvider();
  const title = provider?.title || deal.title || "Active Deal";
  const trust = provider?.trust;
  const distance = provider?.distance;

  return (
    <div className="flex items-center justify-between mb-3">
      <div>
        <h2 className="font-semibold text-lg">{title}</h2>
        {trust !== undefined && (
          <p className="text-xs text-muted">
            Trust: <b>{trust}/1000</b>{distance ? ` · ${distance}` : ""}
          </p>
        )}

        <p className="text-xs text-muted">
          {deal.role === "provider" ? "You are Provider" : "You are Client"}
        </p>
      </div>

      <span
        className={`px-2 py-1 rounded ui-card text-xs font-medium
          ${deal.role === "provider"
            ? "bg-green-100 text-[var(--brand-green)]"
            : "bg-blue-100 text-blue-700"
          }`}
      >
        {deal.role}
      </span>
    </div>
  );
}
