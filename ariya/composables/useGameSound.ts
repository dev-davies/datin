const AUDIO_PATHS = {
  correct: '/sounds/correct.mp3',
  timeup: '/sounds/timeup.mp3'
}

export function useGameSound() {
  const enabled = ref(true)
  let ctx: AudioContext | null = null

  const sounds = {
    correct: import.meta.client ? new Audio(AUDIO_PATHS.correct) : null,
    timeup: import.meta.client ? new Audio(AUDIO_PATHS.timeup) : null
  }

  function init() {
    if (!import.meta.client) return
    if (!ctx) {
      const AudioContextClass =
        window.AudioContext ||
        (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext
      if (AudioContextClass) ctx = new AudioContextClass()
    }
    if (ctx?.state === 'suspended') {
      ctx.resume()
    }
    sounds.correct?.load()
    sounds.timeup?.load()
  }

  function toggle() {
    enabled.value = !enabled.value
    if (enabled.value) init()
    return enabled.value ? '🔊' : '🔇'
  }

  function playTone(freq: number, duration: number, type: OscillatorType = 'sine') {
    if (!enabled.value || !ctx) return
    try {
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()
      osc.type = type
      osc.frequency.value = freq
      gain.gain.setValueAtTime(0.1, ctx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + duration)
      osc.connect(gain)
      gain.connect(ctx.destination)
      osc.start()
      osc.stop(ctx.currentTime + duration)
    } catch {
      // ignore audio errors
    }
  }

  function playSound(name: 'correct' | 'timeup') {
    if (!enabled.value || !import.meta.client) return
    const sound = sounds[name]
    if (!sound) return
    sound.currentTime = 0
    sound.play().catch(() => {
      if (name === 'correct') playTone(600, 0.1, 'sine')
      if (name === 'timeup') playTone(80, 1.0, 'sawtooth')
    })
  }

  function countdownBeep() {
    playTone(600, 0.1, 'sine')
  }

  function goBeep() {
    playTone(800, 0.3, 'square')
  }

  function playCorrect() {
    playSound('correct')
  }

  function playTimeUp() {
    playSound('timeup')
  }

  return {
    enabled,
    init,
    toggle,
    countdownBeep,
    goBeep,
    playCorrect,
    playTimeUp
  }
}
