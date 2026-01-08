import type { NextApiRequest, NextApiResponse } from "next"
import { adminDB } from "@/lib/firebase-admin"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" })
  }

  const { userId, action, days } = req.body

  if (!userId || !action) {
    return res.status(400).json({ error: "Missing params" })
  }

  const ref = adminDB.collection("users").doc(userId)

  if (action === "hard_mute") {
    const until = Date.now() + (days ?? 30) * 24 * 60 * 60 * 1000
    await ref.set(
      { muted: true, blockedUntil: until },
      { merge: true }
    )
  }

  if (action === "unmute") {
    await ref.set(
      { muted: false, blockedUntil: null },
      { merge: true }
    )
  }

  return res.json({ ok: true })
}
