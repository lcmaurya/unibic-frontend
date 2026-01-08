import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { app } from "./firebase-client";

export function listenAuth(callback: (user: User | null) => void) {
  try {
    const auth = getAuth(app);
    return onAuthStateChanged(auth, callback);
  } catch {
    callback(null);
    return () => {};
  }
}
