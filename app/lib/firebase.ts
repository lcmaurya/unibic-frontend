// Firebase BYPASS adapter (no keys required)
// Automatically works in mock mode if env vars are missing

let firebaseEnabled = false;

export function isFirebaseEnabled() {
  return firebaseEnabled;
}

export async function initFirebase() {
  try {
    // Only enable if ALL env vars exist
    if (
      process.env.NEXT_PUBLIC_FIREBASE_API_KEY &&
      process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
    ) {
      const { initializeApp } = await import("firebase/app");
      initializeApp({
        apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      });
      firebaseEnabled = true;
    }
  } catch {
    firebaseEnabled = false;
  }
}

export async function getFirebaseUserCount() {
  // 🔁 BYPASS: return safe fallback when Firebase not wired
  if (!firebaseEnabled) return 0;
  return 0;
}
