import admin from "firebase-admin"
import { adminDB } from "./firebase-admin"

export async function pushToUser(
  userId: string,
  title: string,
  body: string
) {
  const snap = await adminDB.doc(`users/${userId}`).get()
  const token = snap.data()?.fcmToken
  if (!token) return

  await admin.messaging().send({
    token,
    notification: { title, body },
    android: { priority: "high" }
  })
}
