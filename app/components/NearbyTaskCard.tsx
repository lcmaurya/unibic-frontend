import { Button } from "@/app/components/ui/Button";
"use client";

import { useRouter } from "next/navigation";
import Badge from "@/app/components/Badge";

type Props = {
  id: string;
  title: string;
  category: string;
  distance: string;
  time: string;
};

export default function NearbyTaskCard({
  id,
  title,
  category,
  distance,
  time,
}: Props) {
  const router = useRouter();

  return (
    <div
      className="card-tap"
      style={{
        background: "#ffffff",
        borderRadius: 14,
        padding: 14,
        marginBottom: 12,
        boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
        border: "1px solid #e5e7eb",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <h4 style={{ margin: 0 }}>{title}</h4>
          <div style={{ fontSize: 12, opacity: 0.7, marginTop: 4 }}>
            {distance} • {time}
          </div>
        </div>

        <Badge label={category} />
      </div>

      <div
        style={{
          display: "flex",
          gap: 10,
          marginTop: 12,
        }}
      >
        <Button
          className="button tap"
          onClick={() => router.push(`/task/${id}`)}
          style={{
            flex: 1,
            padding: 10,
            borderRadius: 10,
            border: "1px solid #e5e7eb",
            background: "#ffffff",
            fontSize: 14,
          }}
        >
          Details
        </Button>

        <Button
          className="button tap"
          style={{
            flex: 1,
            padding: 10,
            borderRadius: 10,
            border: "none",
            background: "#22c55e",
            color: "#ffffff",
            fontSize: 14,
            fontWeight: "bold",
          }}
        >
          Accept
        </Button>
      </div>
    </div>
  );
}
