// lib/testUser.ts

import { createUserIfNotExists, getUserTrust } from "./firestore";

const TEST_USER_ID = "test-user-001";

export async function initTestUser() {
  await createUserIfNotExists(TEST_USER_ID);
  const data = await getUserTrust(TEST_USER_ID);
}
