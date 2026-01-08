export async function getSkillsCount(): Promise<number> {
  try {
    const res = await fetch("http://localhost:3000/api/skills", {
      cache: "no-store",
    });
    if (!res.ok) throw new Error("skills api failed");
    const data = await res.json();
    return Number(data.count) || 0;
  } catch {
    return 0;
  }
}
