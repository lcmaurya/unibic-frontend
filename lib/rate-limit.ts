import { adminDB } from "./firebase-admin"

export async function rateLimit(userId: string, limit = 5) {
  const ref = adminDB.doc(`rateLimits/${userId}`)
  const snap = await ref.get()

  const now = Date.now()
  const data = snap.exists ? snap.data()! : { count: 0, ts: now }

  if (now - data.ts > 60_000) {
    await ref.set({ count: 1, ts: now })
    return true
  }

  if (data.count >= limit) return false

  await ref.set({ count: data.count + 1, ts: data.ts })
  return true
}
