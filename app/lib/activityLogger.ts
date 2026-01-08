import { prodLog } from "./prodLogger";
import { TrustActivity, ActivityType } from "./activityTypes";

export async function logTrustActivitySafe(
  userId: string | null,
  activity: TrustActivity
) {
  if (!userId) return;

  try {
    const { getFirestore, collection, addDoc } = await import("firebase/firestore");
    const { app } = await import("./firebase-client");

    const db = getFirestore(app);
    await addDoc(collection(db, "users", userId, "trustActivity"), activity);
  } catch (e) {
    // Firebase disabled / missing → ignore
  }
}
