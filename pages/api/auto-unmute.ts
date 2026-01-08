import type { NextApiRequest, NextApiResponse } from "next"
import { adminDB } from "@/lib/firebase-admin"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" })
  }

  const now = Date.now()

  const snap = await adminDB
    .collection("users")
    .where("muted", "==", true)
    .where("blockedUntil", "<=", now)
    .get()

  if (snap.empty) {
    return res.json({ unmuted: 0 })
  }

  const batch = adminDB.batch()

  snap.forEach(doc => {
    batch.update(doc.ref, {
      muted: false,
      blockedUntil: null,
    })
  })

  await batch.commit()

  return res.json({ unmuted: snap.size })
}
