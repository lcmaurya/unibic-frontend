export async function getCommunityCount(): Promise<number> {
  try {
    const res = await fetch("http://localhost:3000/api/community", {
      cache: "no-store",
    });
    if (!res.ok) throw new Error("community api failed");
    const data = await res.json();
    return Number(data.count) || 0;
  } catch {
    return 0;
  }
}
