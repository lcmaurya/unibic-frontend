type DealProvider = {
  id?: number
  title: string
  trust: number
  distance?: string
}

let activeProvider: DealProvider | null = null

export function setActiveProvider(p: DealProvider) {
  activeProvider = p
}

export function getActiveProvider() {
  return activeProvider
}

export function clearActiveProvider() {
  activeProvider = null
}
