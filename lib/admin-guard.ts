import { adminAuth } from "@/lib/firebase-admin"

export async function requireAdmin(req: Request) {
  const token = req.headers.get("authorization")?.replace("Bearer ", "")
  if (!token) throw new Error("No token")

  const decoded = await adminAuth.verifyIdToken(token)
  if (!decoded.admin) throw new Error("Not admin")

  return decoded
}
