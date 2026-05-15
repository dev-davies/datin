import { ref, computed, onUnmounted } from 'vue'

export type GidigidiGameState = 'setup' | 'playing' | 'finished'
export type FlashState = 'none' | 'correct' | 'pass'

export function useGidigidiGame() {
  const gameState = ref<GidigidiGameState>('setup')
  const words = ref<string[]>([
    'Danfo Conductor',
    'Wizkid',
    'Eating Suya',
    'Generator Noise',
    'Jollof Rice',
    'Lagos Traffic',
    'Naija Wedding',
    'Okada Rider',
    'Burna Boy',
    'Owa o! (Next bus stop)'
  ])
  const currentIndex = ref(0)
  const score = ref(0)
  const timeLeft = ref(60)
  const tiltCooldown = ref(false)
  const flashState = ref<FlashState>('none')

  let timerInterval: ReturnType<typeof setInterval> | null = null

  const currentWord = computed(() => words.value[currentIndex.value] || '')

  function startGame() {
    // Shuffle words for randomness
    words.value = [...words.value].sort(() => Math.random() - 0.5)
    currentIndex.value = 0
    score.value = 0
    timeLeft.value = 60
    gameState.value = 'playing'
    tiltCooldown.value = false
    flashState.value = 'none'

    window.addEventListener('deviceorientation', handleOrientation)

    timerInterval = setInterval(() => {
      timeLeft.value -= 1
      if (timeLeft.value <= 0) {
        endGame()
      }
    }, 1000)
  }

  function endGame() {
    if (timerInterval) {
      clearInterval(timerInterval)
      timerInterval = null
    }
    window.removeEventListener('deviceorientation', handleOrientation)
    gameState.value = 'finished'
  }

  function resetGame() {
    endGame()
    gameState.value = 'setup'
  }

  function triggerFlash(type: FlashState) {
    flashState.value = type
    setTimeout(() => {
      if (flashState.value === type) {
        flashState.value = 'none'
      }
    }, 800)
  }

  function markCorrect() {
    if (tiltCooldown.value || gameState.value !== 'playing') return
    score.value += 1
    triggerFlash('correct')
    nextWord()
  }

  function passWord() {
    if (tiltCooldown.value || gameState.value !== 'playing') return
    triggerFlash('pass')
    nextWord()
  }

  function nextWord() {
    activateCooldown()
    currentIndex.value += 1
    if (currentIndex.value >= words.value.length) {
      endGame()
    }
  }

  function activateCooldown() {
    tiltCooldown.value = true
    setTimeout(() => {
      tiltCooldown.value = false
    }, 1500)
  }

  function handleOrientation(event: DeviceOrientationEvent) {
    if (tiltCooldown.value || gameState.value !== 'playing') return

    const beta = event.beta || 0 // Front-to-back tilt in portrait
    const gamma = event.gamma || 0 // Left-to-right tilt in portrait (becomes front-to-back in landscape)

    // Assuming the phone is held in landscape against the forehead.
    // In landscape, tilting forward/backward usually significantly alters gamma (or beta depending on exact orientation).
    // A tilt forward (face down) often means gamma approaches 0 or flips, or beta approaches 0/180.
    // We will use a threshold of 45 degrees to determine a significant tilt.
    const isTiltForward = gamma < -45 || beta < -45
    const isTiltBackward = gamma > 45 || beta > 80 // Adjust as needed for backwards tilt

    if (isTiltForward) {
      markCorrect()
    } else if (isTiltBackward) {
      passWord()
    }
  }

  async function requestMotionPermission() {
    // iOS 13+ requires explicit permission for DeviceOrientation events
    if (typeof (DeviceOrientationEvent as any).requestPermission === 'function') {
      try {
        const permissionState = await (DeviceOrientationEvent as any).requestPermission()
        if (permissionState === 'granted') {
          startGame()
        } else {
          alert('Permission to access device orientation was denied.')
        }
      } catch (error) {
        console.error('Error requesting device orientation permission:', error)
      }
    } else {
      // Non-iOS 13+ devices do not need explicit permission
      startGame()
    }
  }

  onUnmounted(() => {
    endGame()
  })

  return {
    gameState,
    words,
    currentWord,
    currentIndex,
    score,
    timeLeft,
    tiltCooldown,
    flashState,
    requestMotionPermission,
    startGame,
    endGame,
    resetGame,
    markCorrect,
    passWord
  }
}
