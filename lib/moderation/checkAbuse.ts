import { badWords } from "./badWords"

export function hasAbuse(text: string) {
  const t = text.toLowerCase()
  return badWords.some(w => t.includes(w))
}
