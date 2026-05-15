export interface GameRule {
  icon: string
  text: string
  html?: string
}

export interface LobbyGame {
  name: string
  slug: string
  href: string
  description: string
  status: string
}

export type GameTheme = 'dat-tin' | 'imposter'

export interface ScoreboardEntry {
  key: string
  label: string
  score: number
  labelPrefix?: string
  style?: Record<string, string>
}
