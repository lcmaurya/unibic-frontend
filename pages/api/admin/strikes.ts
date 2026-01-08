import type { NextApiRequest, NextApiResponse } from "next"
import { adminDB } from "@/lib/firebase-admin"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" })
  }

  const { userId, reason } = req.body

  if (!userId || !reason) {
    return res.status(400).json({ error: "Missing params" })
  }

  await adminDB
    .collection("users")
    .doc(userId)
    .collection("strikes")
    .add({
      reason,
      at: Date.now(),
    })

  return res.json({ ok: true })
}
