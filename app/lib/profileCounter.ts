export async function getProfileStats(): Promise<{ views: number; ratings: number }> {
  try {
    const res = await fetch("http://localhost:3000/api/profile", {
      cache: "no-store",
    });
    if (!res.ok) throw new Error("profile api failed");
    const data = await res.json();
    return {
      views: Number(data.views) || 0,
      ratings: Number(data.ratings) || 0,
    };
  } catch {
    return { views: 0, ratings: 0 };
  }
}
