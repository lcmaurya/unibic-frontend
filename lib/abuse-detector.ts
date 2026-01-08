import { ABUSE_WORDS } from "./abuse-words"

export function detectAbuse(text: string) {
  const lower = text.toLowerCase()

  const hits = ABUSE_WORDS.filter(word =>
    lower.includes(word)
  )

  return {
    abusive: hits.length > 0,
    hits,
    score: hits.length
  }
}
