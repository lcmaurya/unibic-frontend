// Pi Browser Auth Adapter (SAFE + BYPASS)
// Works even if Pi SDK not available

export type PiUser = {
  uid: string;
  username: string;
};

export async function getPiUser(): Promise<PiUser | null> {
  try {
    // Detect Pi Browser
    // @ts-ignore
    if (typeof window !== "undefined" && window.Pi) {
      // @ts-ignore
      const scopes = ["username"];
      // @ts-ignore
      const auth = await window.Pi.authenticate(scopes, () => {});
      return {
        uid: auth.user.uid,
        username: auth.user.username,
      };
    }
  } catch {}

  // 🔁 BYPASS MODE (local / non-Pi browser)
  return {
    uid: "local-dev",
    username: "developer",
  };
}
