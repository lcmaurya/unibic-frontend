import { prodLog } from "./prodLogger";
// 🔒 TRUST ENGINE – DO NOT MODIFY (WIRING PENDING)
import { calculateTrustScore, TrustEvent } from "./trustEngine";

export async function updateTrustScoreSafe(
  userId: string | null,
  currentScore: number,
  event: TrustEvent
): Promise<number> {
  const newScore = calculateTrustScore(currentScore, event);

  try {
    const { getFirestore, doc, setDoc } = await import("firebase/firestore");
    const { app } = await import("./firebase-client");

    if (!userId) return newScore;

    const db = getFirestore(app);
    await setDoc(
      doc(db, "users", userId),
      { trustScore: newScore },
      { merge: true }
    );
  } catch (e) {
    // Firebase missing / disabled → silent fallback
  }

  return newScore;
}
