import { adminDB } from "./firebase-admin"
import { pushToUser } from "./push"

export async function notifyUser(
  userId: string,
  title: string,
  body: string,
  type: "system" | "moderation" = "system"
) {
  await adminDB.collection("notifications").add({
    userId,
    title,
    body,
    type,
    createdAt: Date.now(),
    read: false,
  })

  // 🔥 NON-BLOCKING push (IMPORTANT)
  pushToUser(userId, title, body).catch(err => {
    console.error("⚠️ push failed:", err.message)
  })
}
