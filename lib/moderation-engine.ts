import { detectAbuse } from "./abuse-detector"

export function moderateMessage(text: string) {
  const abuse = detectAbuse(text)

  if (abuse.abusive) {
    return {
      action: "mute",
      reason: "abusive_language",
      severity: abuse.score
    }
  }

  if (text.length > 500) {
    return {
      action: "warn",
      reason: "spam_length",
      severity: 1
    }
  }

  return {
    action: "allow",
    reason: "clean",
    severity: 0
  }
}
