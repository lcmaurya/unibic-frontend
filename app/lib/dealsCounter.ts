export async function getDealsCount(): Promise<number> {
  try {
    const res = await fetch("http://localhost:3000/api/deals", {
      cache: "no-store",
    });
    if (!res.ok) throw new Error("deals api failed");
    const data = await res.json();
    return Number(data.count) || 0;
  } catch {
    return 0;
  }
}
