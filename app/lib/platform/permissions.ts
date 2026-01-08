export function can(action: string, role: "client" | "provider") {
  if (action === "upload" && role === "client") return true;
  if (action === "mark_done" && role === "provider") return true;
  return false;
}
