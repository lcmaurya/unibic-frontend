import { Button } from "@/app/components/ui/Button";
"use client";

import { useRouter } from "next/navigation";

export default function SuccessPage() {
  const router = useRouter();

  return (
    <main style={{ padding: 20, textAlign: "center" }}>
      <h1>✅ Task Posted!</h1>

      <p style={{ marginTop: 12 }}>
        Your task is now visible to nearby helpers.
      </p>

      <Button className="button tap" onClick={() => router.push("/")} style={primaryBtn}>
        Back to Home
      </Button>

      <Button className="button tap" onClick={() => router.push("/post")} style={secondaryBtn}>
        Post Another Task
      </Button>
    </main>
  );
}

const primaryBtn = {
  width: "100%",
  marginTop: 20,
  padding: 14,
  borderRadius: 10,
  border: "none",
  background: "#2563eb",
  color: "#fff",
  fontSize: 16,
};

const secondaryBtn = {
  width: "100%",
  marginTop: 12,
  padding: 14,
  borderRadius: 10,
  border: "1px solid #e5e7eb",
  background: "#fff",
  fontSize: 16,
};
