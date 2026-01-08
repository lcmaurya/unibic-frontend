import { prodLog } from "./prodLogger";
import { Task } from "./taskTypes";

export async function fetchNearbyTasksSafe(): Promise<Task[]> {
  try {
    const { getFirestore, collection, getDocs } = await import("firebase/firestore");
    const { app } = await import("./firebase-client");

    const db = getFirestore(app);
    const snap = await getDocs(collection(db, "tasks"));

    return snap.docs.map((d) => ({
      id: d.id,
      ...(d.data() as Omit<Task, "id">),
    }));
  } catch (e) {
    // Firebase missing → fallback
    return [];
  }
}
