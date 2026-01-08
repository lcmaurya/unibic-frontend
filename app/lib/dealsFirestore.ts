import { getFirestore } from 'firebase-admin/firestore';
import { initializeApp, applicationDefault, getApps } from 'firebase-admin/app';

if (!getApps().length) {
  initializeApp({ credential: applicationDefault() });
}

const db = getFirestore();

export async function fetchDeals(userId: string) {
  try {
    const snap = await db
      .collection('deals')
      .where('participants', 'array-contains', userId)
      .get();

    return snap.docs.map(d => ({ id: d.id, ...d.data() }));
  } catch (e) {
    console.warn('Deals fetch fallback:', e);
    return [];
  }
}
