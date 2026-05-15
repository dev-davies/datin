import type { GameRule, LobbyGame } from '~/types/game'

export const lobbyGames: LobbyGame[] = [
  {
    name: 'Dat Tin',
    slug: 'dat-tin',
    href: '/games/dat-tin',
    description: 'A Naija-flavoured word guessing game with forbidden words, teams, timers, and plenty tension.',
    status: 'Word party game'
  },
  {
    name: 'Imposter',
    slug: 'imposter',
    href: '/games/imposter',
    description: 'Pass-and-play hidden role game where everyone knows the word except one sharp imposter.',
    status: 'Hidden role game'
  },
  {
    name: 'Gidigidi',
    slug: 'gidigidi',
    href: '/games/gidigidi',
    description: 'A hilarious Nigerian charades game. Place the phone on your forehead and guess the words!',
    status: 'Charades party game'
  }
]

export const datTinRules: GameRule[] = [
  {
    icon: '🗣️',
    text: 'Describe the green word (Dat Tin) to your teammates without saying it.',
    html: 'Describe the green word (<strong>Dat Tin</strong>) to your teammates without saying it.'
  },
  {
    icon: '🚫',
    text: 'Avoid using any of the red forbidden words (No Talk Am!) listed below.',
    html: 'Avoid using any of the red forbidden words (<strong>No Talk Am!</strong>) listed below.'
  },
  {
    icon: '⏳',
    text: 'You have 60 seconds per round. Score as many points as possible!',
    html: 'You have 60 seconds per round. Score as many points as possible!'
  },
  {
    icon: '🏆',
    text: 'The team with the most points after 3 rounds is the Champion!',
    html: 'The team with the most points after 3 rounds is the <strong>Champion!</strong>'
  }
]

export const imposterRules: GameRule[] = [
  {
    icon: '📱',
    text: 'Pass the phone so each player can see their role privately. Do not peek at anyone else\'s screen.'
  },
  {
    icon: '🤫',
    text: 'Everyone except one imposter sees the same secret word. The imposter must blend in without knowing it.'
  },
  {
    icon: '💬',
    text: 'Discuss and ask questions to spot who seems unsure or vague about the word.'
  },
  {
    icon: '🗳️',
    text: 'Vote secretly to eliminate who you think is the imposter. Crewmates win if they catch them; the imposter wins if they survive.'
  }
]

export const gidigidiRules: GameRule[] = [
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>',
    text: 'Hold your phone up to your forehead in landscape mode facing your friends.'
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>',
    text: 'Your friends will act out, describe, or shout clues for the word on the screen without saying it.'
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>',
    text: 'Tilt the phone FORWARD (face down) if you guess the word correctly.'
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>',
    text: 'Tilt the phone BACKWARD (face up) to pass if you do not know the word.'
  }
]
