const BAD_WORDS = [
  "gali","madarchod","behenchod","chutiya","harami",
  "fuck","shit","bitch","asshole","abuse"
]

export function toxicityScore(text: string) {
  let score = 0
  const lower = text.toLowerCase()

  BAD_WORDS.forEach(w => {
    if (lower.includes(w)) score += 20
  })

  if (text.length > 200) score += 10
  if (/[A-Z]{6,}/.test(text)) score += 10

  return Math.min(score, 100)
}
