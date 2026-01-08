export function useTrustScore() {
  return { score: 0 }
}

export async function createUserIfNotExists(userId: string) {
  return { userId }
}

export async function getUserTrust(userId: string) {
  return { userId, trust: 0 }
}
