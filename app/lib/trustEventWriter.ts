import { prodLog } from "./prodLogger";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";
import { TrustEvent } from "./trustEngine";
import { getApp } from "./firebase-client";

export async function writeTrustEvent(
  userId: string,
  event: TrustEvent,
  meta?: Record<string, any>
) {
  try {
    const app = getApp();
    const db = getFirestore(app);

    await addDoc(collection(db, "trust_events"), {
      userId,
      event,
      meta: meta || {},
      createdAt: serverTimestamp(),
    });
  } catch (e) {
    // silent fail (no UI break)
    console.warn("trust_event_write_failed");
  }
}
