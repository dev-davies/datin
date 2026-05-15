import { _ as __nuxt_component_1$1$1, a as __nuxt_component_1$2 } from './GameWelcome-D1-YXX4Q.mjs';
import { defineComponent, ref, mergeProps, unref, computed, watch, nextTick, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderStyle, ssrRenderClass, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import { d as datTinRules } from './games-HseoQX6m.mjs';
import { u as useHead } from './composables-BJcJC-oq.mjs';
import './nuxt-link-CXiEearW.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'vue-router';

const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "GameSoundButton",
  __ssrInlineRender: true,
  props: {
    icon: {}
  },
  emits: ["toggle"],
  setup(__props, { emit: __emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        class: "sound-btn",
        type: "button"
      }, _attrs))}>${ssrInterpolate(__props.icon)}</button>`);
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/game/GameSoundButton.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const __nuxt_component_1$1 = Object.assign(_sfc_main$b, { __name: "GameSoundButton" });
function shuffle(items) {
  const shuffled = [...items];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }
  return shuffled;
}
const intervalError = "[nuxt] `setInterval` should not be used on the server. Consider wrapping it with an `onNuxtReady`, `onBeforeMount` or `onMounted` lifecycle hook, or ensure you only call it in the browser by checking `false`.";
const setInterval = (() => {
  console.error(intervalError);
});
const MAX_ROUNDS_PER_TEAM = 3;
const COUNTDOWN_DURATION = 10;
const TEAM_COLORS = [
  "var(--team1-color)",
  "var(--team2-color)",
  "var(--team3-color)",
  "var(--team4-color)"
];
const datTinTimerOptions = [
  { value: 30, title: "Sharp Sharp", subtitle: "30s" },
  { value: 60, title: "Normal Level", subtitle: "60s" },
  { value: 90, title: "Soft Work", subtitle: "90s" },
  { value: 120, title: "African Time", subtitle: "120s" }
];
function useDatTinGame(sound) {
  const phase = ref("welcome");
  const cardData = ref({ naija: [], global: [] });
  const loadError = ref("");
  const selectedDecks = ref(/* @__PURE__ */ new Set(["naija"]));
  const roundDuration = ref(30);
  const numberOfTeams = ref(0);
  const teams = ref([]);
  const currentTeamIndex = ref(0);
  const totalRoundsCompleted = ref(0);
  const shuffledCards = ref([]);
  const currentCardIndex = ref(0);
  const roundCards = ref([]);
  const roundScore = ref(0);
  const timeLeft = ref(30);
  const countdown = ref(COUNTDOWN_DURATION);
  const isPaused = ref(false);
  const cardAnimKey = ref(0);
  const scoreAnimKey = ref(0);
  let roundTimer = null;
  let countdownTimer = null;
  const activeCards = computed(() => {
    const cards = [];
    selectedDecks.value.forEach((deck) => {
      if (cardData.value[deck]) {
        cards.push(...cardData.value[deck].map((card) => ({ ...card, category: deck })));
      }
    });
    return cards;
  });
  const currentCard = computed(() => shuffledCards.value[currentCardIndex.value]);
  const currentTeam = computed(() => teams.value[currentTeamIndex.value]);
  const reviewScore = computed(() => roundCards.value.filter((card) => card.status === "correct").length);
  const sortedTeams = computed(() => [...teams.value].sort((a, b) => b.score - a.score));
  const leadingTeam = computed(() => sortedTeams.value[0]);
  const champion = computed(() => sortedTeams.value[0]);
  const currentRoundNumber = computed(
    () => numberOfTeams.value ? Math.floor(totalRoundsCompleted.value / numberOfTeams.value) + 1 : 1
  );
  const nextRoundLabel = computed(() => {
    const nextTeam = teams.value[currentTeamIndex.value];
    if (!nextTeam) return "Next round";
    return `Start ${nextTeam.name}'s Turn (Round ${currentRoundNumber.value}/${MAX_ROUNDS_PER_TEAM})`;
  });
  function startFromWelcome() {
    phase.value = "setup";
  }
  function isDeckSelected(deck) {
    return selectedDecks.value.has(deck);
  }
  function toggleDeck(deck) {
    if (selectedDecks.value.has(deck)) {
      if (selectedDecks.value.size > 1) {
        selectedDecks.value.delete(deck);
        selectedDecks.value = new Set(selectedDecks.value);
      }
      return;
    }
    selectedDecks.value.add(deck);
    selectedDecks.value = new Set(selectedDecks.value);
  }
  function setRoundDuration(duration) {
    roundDuration.value = duration;
  }
  function setupAndStartGame(teamCount) {
    if (activeCards.value.length === 0) {
      loadError.value = "Please select at least one deck!";
      return;
    }
    numberOfTeams.value = teamCount;
    teams.value = Array.from({ length: teamCount }, (_, index) => ({
      name: `Team ${index + 1}`,
      score: 0,
      color: TEAM_COLORS[index]
    }));
    currentTeamIndex.value = 0;
    totalRoundsCompleted.value = 0;
    shuffledCards.value = shuffle(activeCards.value);
    currentCardIndex.value = 0;
    loadError.value = "";
    startCountdown();
  }
  function startCountdown() {
    clearTimers();
    phase.value = "countdown";
    countdown.value = COUNTDOWN_DURATION;
    sound.countdownBeep();
    countdownTimer = setInterval();
  }
  function skipCountdown() {
    clearTimers();
    startRound();
  }
  function startRound() {
    clearTimers();
    phase.value = "playing";
    isPaused.value = false;
    roundCards.value = [];
    roundScore.value = 0;
    timeLeft.value = roundDuration.value;
    cardAnimKey.value += 1;
    roundTimer = setInterval();
  }
  function handleCorrect() {
    if (!currentCard.value) return;
    roundCards.value.push({ word: currentCard.value.targetWord, status: "correct" });
    roundScore.value += 1;
    scoreAnimKey.value += 1;
    sound.playCorrect();
    nextCard();
  }
  function handlePass() {
    if (!currentCard.value) return;
    roundCards.value.push({ word: currentCard.value.targetWord, status: "skipped" });
    nextCard();
  }
  function nextCard() {
    currentCardIndex.value += 1;
    if (currentCardIndex.value >= shuffledCards.value.length) {
      shuffledCards.value = shuffle(activeCards.value);
      currentCardIndex.value = 0;
    }
    cardAnimKey.value += 1;
  }
  function togglePause() {
    if (phase.value !== "playing") return;
    isPaused.value = !isPaused.value;
    if (isPaused.value) {
      clearTimers();
      return;
    }
    roundTimer = setInterval();
  }
  function toggleCardStatus(index) {
    const item = roundCards.value[index];
    if (!item) return;
    item.status = item.status === "correct" ? "skipped" : "correct";
  }
  function confirmScore() {
    roundScore.value = reviewScore.value;
    endRound();
  }
  function endRound() {
    clearTimers();
    if (!currentTeam.value) return;
    currentTeam.value.score += roundScore.value;
    currentTeamIndex.value = (currentTeamIndex.value + 1) % numberOfTeams.value;
    totalRoundsCompleted.value += 1;
    if (totalRoundsCompleted.value >= numberOfTeams.value * MAX_ROUNDS_PER_TEAM) {
      phase.value = "gameOver";
      return;
    }
    phase.value = "roundOver";
  }
  function resetGame() {
    clearTimers();
    isPaused.value = false;
    phase.value = "setup";
    totalRoundsCompleted.value = 0;
    currentCardIndex.value = 0;
    roundScore.value = 0;
  }
  function quitGame() {
    {
      return;
    }
  }
  function teamIndicatorStyle(team) {
    if (!team) return {};
    return { backgroundColor: team.color };
  }
  function scoreboardItemStyle(team) {
    return { backgroundColor: team.color };
  }
  function leaderGradientStyle(team) {
    if (!team) return {};
    return {
      background: `linear-gradient(135deg, ${team.color}, var(--yellow-300))`
    };
  }
  function medalForPlace(index) {
    if (index === 0) return "🥇";
    if (index === 1) return "🥈";
    if (index === 2) return "🥉";
    return `${index + 1}.`;
  }
  function clearTimers() {
    if (roundTimer) clearInterval(roundTimer);
    if (countdownTimer) clearInterval(countdownTimer);
    roundTimer = null;
    countdownTimer = null;
  }
  return {
    phase,
    loadError,
    selectedDecks,
    roundDuration,
    teams,
    roundCards,
    roundScore,
    timeLeft,
    countdown,
    isPaused,
    cardAnimKey,
    scoreAnimKey,
    currentCard,
    currentTeam,
    reviewScore,
    sortedTeams,
    leadingTeam,
    champion,
    nextRoundLabel,
    isDeckSelected,
    startFromWelcome,
    toggleDeck,
    setRoundDuration,
    setupAndStartGame,
    startCountdown,
    skipCountdown,
    handleCorrect,
    handlePass,
    togglePause,
    toggleCardStatus,
    confirmScore,
    resetGame,
    quitGame,
    teamIndicatorStyle,
    scoreboardItemStyle,
    leaderGradientStyle,
    medalForPlace
  };
}
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "DatTinSetup",
  __ssrInlineRender: true,
  props: {
    roundDuration: {},
    loadError: {},
    isDeckSelected: { type: Function }
  },
  emits: ["toggleDeck", "startWithTeams", "setDuration"],
  setup(__props, { emit: __emit }) {
    const teamCounts = [2, 3, 4];
    const timerOptions = datTinTimerOptions;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "title-screen" }, _attrs))} data-v-0960bf09><h1 data-v-0960bf09>Dat Tin <span style="${ssrRenderStyle({ "font-size": "75%" })}" data-v-0960bf09>🇳🇬</span></h1><div class="rules" data-v-0960bf09><h2 style="${ssrRenderStyle({ "margin-bottom": "0" })}" data-v-0960bf09>Select Teams</h2></div><div class="team-setup-box" data-v-0960bf09><h2 data-v-0960bf09>Select Decks</h2><div class="deck-selector" data-v-0960bf09><button class="${ssrRenderClass(["deck-option", { selected: __props.isDeckSelected("naija") }])}" type="button" data-v-0960bf09><span data-v-0960bf09>🇳🇬</span> Naija </button><button class="${ssrRenderClass(["deck-option", { selected: __props.isDeckSelected("global") }])}" type="button" data-v-0960bf09><span data-v-0960bf09>🌍</span> Global </button></div><h2 data-v-0960bf09>Select number of teams to start</h2><div class="team-count-selector" data-v-0960bf09><!--[-->`);
      ssrRenderList(teamCounts, (count) => {
        _push(`<button class="team-count-btn" type="button" data-v-0960bf09>${ssrInterpolate(count)}</button>`);
      });
      _push(`<!--]--></div><h2 data-v-0960bf09>Round Duration</h2><div class="timer-selector" data-v-0960bf09><!--[-->`);
      ssrRenderList(unref(timerOptions), (option) => {
        _push(`<button class="${ssrRenderClass(["timer-btn", { selected: __props.roundDuration === option.value }])}" type="button" data-v-0960bf09>${ssrInterpolate(option.title)}<br data-v-0960bf09><span class="timer-subtitle" data-v-0960bf09>${ssrInterpolate(option.subtitle)}</span></button>`);
      });
      _push(`<!--]--></div>`);
      if (__props.loadError) {
        _push(`<p class="dat-setup-error" data-v-0960bf09>${ssrInterpolate(__props.loadError)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/games/dat-tin/DatTinSetup.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$a, [["__scopeId", "data-v-0960bf09"]]), { __name: "DatTinSetup" });
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "GameCountdown",
  __ssrInlineRender: true,
  props: {
    value: {},
    message: {},
    skipLabel: { default: "Play Now" }
  },
  emits: ["skip"],
  setup(__props, { emit: __emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "countdown-screen" }, _attrs))}><div class="countdown-number">${ssrInterpolate(__props.value)}</div><div class="countdown-message">${ssrInterpolate(__props.message)}</div><button class="btn-skip" type="button">${ssrInterpolate(__props.skipLabel)}</button></div>`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/game/GameCountdown.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_0$2 = Object.assign(_sfc_main$9, { __name: "GameCountdown" });
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "DatTinCountdown",
  __ssrInlineRender: true,
  props: {
    countdown: {},
    teamName: {}
  },
  emits: ["skip"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_GameCountdown = __nuxt_component_0$2;
      _push(ssrRenderComponent(_component_GameCountdown, mergeProps({
        value: __props.countdown,
        message: `${__props.teamName}, Get Ready!`,
        onSkip: ($event) => emit("skip")
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/games/dat-tin/DatTinCountdown.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_4 = Object.assign(_sfc_main$8, { __name: "DatTinCountdown" });
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "GamePauseOverlay",
  __ssrInlineRender: true,
  props: {
    visible: { type: Boolean },
    title: { default: "Oya Wait!" },
    subtitle: { default: "Game Paused" },
    resumeLabel: { default: "Oya Continue ▶️" },
    quitLabel: { default: "Quit to Menu" }
  },
  emits: ["resume", "quit"],
  setup(__props, { emit: __emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.visible) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "pause-overlay" }, _attrs))} data-v-f9674dce><h1 data-v-f9674dce>${ssrInterpolate(__props.title)}</h1><p data-v-f9674dce>${ssrInterpolate(__props.subtitle)}</p><div class="pause-actions" data-v-f9674dce><button class="btn btn-primary pause-continue" type="button" data-v-f9674dce>${ssrInterpolate(__props.resumeLabel)}</button><button class="btn btn-secondary pause-quit" type="button" data-v-f9674dce>${ssrInterpolate(__props.quitLabel)}</button></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/game/GamePauseOverlay.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$7, [["__scopeId", "data-v-f9674dce"]]), { __name: "GamePauseOverlay" });
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "DatTinPlaying",
  __ssrInlineRender: true,
  props: {
    teamName: {},
    teamIndicatorStyle: {},
    roundScore: {},
    scoreAnimKey: {},
    timeLeft: {},
    card: {},
    cardAnimKey: {},
    isPaused: { type: Boolean }
  },
  emits: ["pass", "correct", "togglePause", "quit"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const targetWordRef = ref(null);
    watch(
      () => [props.card?.targetWord, props.cardAnimKey],
      async () => {
        await nextTick();
        const splitting = (void 0).Splitting;
        if (!targetWordRef.value || !splitting) return;
        splitting({ target: targetWordRef.value, by: "chars" });
      },
      { immediate: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_GamePauseOverlay = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "game-screen" }, _attrs))} data-v-105bc614><div class="current-team-indicator" style="${ssrRenderStyle(__props.teamIndicatorStyle)}" data-v-105bc614>${ssrInterpolate(__props.teamName)}&#39;s Turn </div><header class="game-header" data-v-105bc614><div class="game-header-controls" data-v-105bc614><button class="btn-icon" type="button" data-v-105bc614>⏸️</button><button class="btn-quit" type="button" data-v-105bc614>Quit</button></div><div class="score-display" data-v-105bc614><span class="label" data-v-105bc614>Round Score:</span><span class="value animated tada" data-v-105bc614>${ssrInterpolate(__props.roundScore)}</span></div><span class="${ssrRenderClass([{ "low-time": __props.timeLeft <= 10 }, "timer"])}" data-v-105bc614>${ssrInterpolate(__props.timeLeft)}</span></header>`);
      _push(ssrRenderComponent(_component_GamePauseOverlay, {
        visible: __props.isPaused,
        onResume: ($event) => emit("togglePause"),
        onQuit: ($event) => emit("quit")
      }, null, _parent));
      _push(`<div class="card-container" data-v-105bc614><div class="game-card animated fadeInUp" data-v-105bc614>`);
      if (__props.card) {
        _push(`<div class="card-section target" data-v-105bc614><p class="label" data-v-105bc614>Dat Tin</p><h2 class="target-word" data-splitting data-v-105bc614>${ssrInterpolate(__props.card.targetWord)}</h2></div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.card) {
        _push(`<div class="card-section forbidden" data-v-105bc614><p class="label" data-v-105bc614>No Talk Am!</p><ul class="forbidden-words-list" data-v-105bc614><!--[-->`);
        ssrRenderList(__props.card.forbiddenWords, (word) => {
          _push(`<li class="forbidden-word" data-v-105bc614>${ssrInterpolate(word)}</li>`);
        });
        _push(`<!--]--></ul></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><footer class="game-footer" data-v-105bc614><button class="btn btn-pass" type="button" data-v-105bc614>Pass</button><button class="btn btn-primary" type="button" data-v-105bc614>Correct!</button></footer></div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/games/dat-tin/DatTinPlaying.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$6, [["__scopeId", "data-v-105bc614"]]), { __name: "DatTinPlaying" });
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "DatTinReview",
  __ssrInlineRender: true,
  props: {
    roundCards: {},
    reviewScore: {}
  },
  emits: ["toggleStatus", "confirm"],
  setup(__props, { emit: __emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "title-screen" }, _attrs))} data-v-64c374d8><h1 data-v-64c374d8>Review Round</h1><div class="review-box" data-v-64c374d8><h3 data-v-64c374d8>Check Scores</h3><ul class="review-list" data-v-64c374d8><!--[-->`);
      ssrRenderList(__props.roundCards, (item, index) => {
        _push(`<li class="review-item" data-v-64c374d8><span class="review-word" data-v-64c374d8>${ssrInterpolate(item.word)}</span><button class="${ssrRenderClass(["status-btn", item.status === "correct" ? "correct" : "pass"])}" type="button" data-v-64c374d8>${ssrInterpolate(item.status === "correct" ? "Correct" : "Pass")}</button></li>`);
      });
      _push(`<!--]--></ul></div><div class="review-score-line" data-v-64c374d8> Score: <span class="review-score-value" data-v-64c374d8>${ssrInterpolate(__props.reviewScore)}</span></div><button class="btn btn-primary" type="button" data-v-64c374d8>Confirm Score</button></div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/games/dat-tin/DatTinReview.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$5, [["__scopeId", "data-v-64c374d8"]]), { __name: "DatTinReview" });
const _sfc_main$4 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    "aria-hidden": "true",
    class: "confetti-layer"
  }, _attrs))} data-v-9fc335ab><!--[-->`);
  ssrRenderList(9, (index) => {
    _push(`<div class="confetti" data-v-9fc335ab></div>`);
  });
  _push(`<!--]--></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/game/GameConfetti.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-9fc335ab"]]), { __name: "GameConfetti" });
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "GameScoreboard",
  __ssrInlineRender: true,
  props: {
    entries: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "scoreboard" }, _attrs))}><!--[-->`);
      ssrRenderList(__props.entries, (entry) => {
        _push(`<div class="scoreboard-item" style="${ssrRenderStyle(entry.style)}"><span class="team-name">`);
        if (entry.labelPrefix) {
          _push(`<!--[-->${ssrInterpolate(entry.labelPrefix)}<!--]-->`);
        } else {
          _push(`<!---->`);
        }
        _push(`${ssrInterpolate(entry.label)}</span><span class="team-score">${ssrInterpolate(entry.score)}</span></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/game/GameScoreboard.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main$3, { __name: "GameScoreboard" });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "DatTinRoundOver",
  __ssrInlineRender: true,
  props: {
    teams: {},
    leadingTeam: {},
    nextRoundLabel: {},
    leaderStyle: {},
    scoreboardItemStyle: { type: Function }
  },
  emits: ["nextRound", "newGame"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const scoreboardEntries = computed(
      () => props.teams.map((team) => ({
        key: team.name,
        label: team.name,
        score: team.score,
        style: props.scoreboardItemStyle(team)
      }))
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_GameConfetti = __nuxt_component_0;
      const _component_GameScoreboard = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "title-screen" }, _attrs))} data-v-84901c57><h1 data-v-84901c57>Round Over!</h1><div class="winner-display" style="${ssrRenderStyle(__props.leaderStyle)}" data-v-84901c57>`);
      _push(ssrRenderComponent(_component_GameConfetti, null, null, _parent));
      _push(`<div class="trophy" data-v-84901c57>🏆</div><div class="winner-banner" data-v-84901c57>Current Leader</div><div class="winner-team" data-v-84901c57>${ssrInterpolate(__props.leadingTeam?.name)}</div><div class="winner-team-score" data-v-84901c57>${ssrInterpolate(__props.leadingTeam?.score)} points</div></div>`);
      _push(ssrRenderComponent(_component_GameScoreboard, { entries: unref(scoreboardEntries) }, null, _parent));
      _push(`<button class="btn btn-primary next-round-btn" type="button" data-v-84901c57>${ssrInterpolate(__props.nextRoundLabel)}</button><button class="btn btn-secondary new-game-btn" type="button" data-v-84901c57>New Game</button></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/games/dat-tin/DatTinRoundOver.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_7 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$2, [["__scopeId", "data-v-84901c57"]]), { __name: "DatTinRoundOver" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DatTinGameOver",
  __ssrInlineRender: true,
  props: {
    teams: {},
    champion: {},
    scoreboardItemStyle: { type: Function },
    medalForPlace: { type: Function }
  },
  emits: ["playAgain"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const scoreboardEntries = computed(
      () => props.teams.map((team, index) => ({
        key: team.name,
        label: team.name,
        score: team.score,
        labelPrefix: props.medalForPlace(index),
        style: props.scoreboardItemStyle(team)
      }))
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_GameConfetti = __nuxt_component_0;
      const _component_GameScoreboard = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "title-screen" }, _attrs))} data-v-47628900><h1 data-v-47628900>Game Over!</h1><div class="final-winner-display" data-v-47628900>`);
      _push(ssrRenderComponent(_component_GameConfetti, null, null, _parent));
      _push(`<div class="final-trophy" data-v-47628900>🏆</div><div class="victory-message" data-v-47628900>Champion!</div><div class="final-winner-team" data-v-47628900>${ssrInterpolate(__props.champion?.name)}</div><div class="final-score" data-v-47628900>${ssrInterpolate(__props.champion?.score)} Total Points</div></div>`);
      _push(ssrRenderComponent(_component_GameScoreboard, { entries: unref(scoreboardEntries) }, null, _parent));
      _push(`<button class="btn btn-primary play-again-btn" type="button" data-v-47628900>Play Again</button></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/games/dat-tin/DatTinGameOver.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_8 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["__scopeId", "data-v-47628900"]]), { __name: "DatTinGameOver" });
function useGameSound() {
  const enabled = ref(true);
  function init() {
    return;
  }
  function toggle() {
    enabled.value = !enabled.value;
    if (enabled.value) ;
    return enabled.value ? "🔊" : "🔇";
  }
  function playTone(freq, duration, type = "sine") {
    if (!enabled.value || true) return;
  }
  function playSound(name) {
    if (!enabled.value || true) return;
  }
  function countdownBeep() {
    playTone(600, 0.1, "sine");
  }
  function goBeep() {
    playTone(800, 0.3, "square");
  }
  function playCorrect() {
    playSound();
  }
  function playTimeUp() {
    playSound();
  }
  return {
    enabled,
    init,
    toggle,
    countdownBeep,
    goBeep,
    playCorrect,
    playTimeUp
  };
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "dat-tin",
  __ssrInlineRender: true,
  setup(__props) {
    const sound = useGameSound();
    const soundIcon = ref("🔊");
    const {
      phase,
      loadError,
      roundDuration,
      roundCards,
      roundScore,
      timeLeft,
      countdown,
      isPaused,
      cardAnimKey,
      scoreAnimKey,
      currentCard,
      currentTeam,
      reviewScore,
      sortedTeams,
      leadingTeam,
      champion,
      nextRoundLabel,
      isDeckSelected,
      startFromWelcome,
      toggleDeck,
      setRoundDuration,
      setupAndStartGame,
      startCountdown,
      skipCountdown,
      handleCorrect,
      handlePass,
      togglePause,
      toggleCardStatus,
      confirmScore,
      resetGame,
      quitGame,
      teamIndicatorStyle,
      scoreboardItemStyle,
      leaderGradientStyle,
      medalForPlace
    } = useDatTinGame(sound);
    function onToggleSound() {
      soundIcon.value = sound.toggle();
    }
    useHead({
      title: "Dat Tin 🇳🇬",
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
        }
      ],
      script: [{ src: "/lib/splitting.min.js", defer: true }]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_GameLobbyLink = __nuxt_component_1$1$1;
      const _component_GameSoundButton = __nuxt_component_1$1;
      const _component_GameWelcome = __nuxt_component_1$2;
      const _component_DatTinSetup = __nuxt_component_3;
      const _component_DatTinCountdown = __nuxt_component_4;
      const _component_DatTinPlaying = __nuxt_component_5;
      const _component_DatTinReview = __nuxt_component_6;
      const _component_DatTinRoundOver = __nuxt_component_7;
      const _component_DatTinGameOver = __nuxt_component_8;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "dat-tin-app" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_GameLobbyLink, null, null, _parent));
      _push(ssrRenderComponent(_component_GameSoundButton, {
        icon: unref(soundIcon),
        onToggle: onToggleSound
      }, null, _parent));
      _push(`<main>`);
      if (unref(phase) === "welcome") {
        _push(ssrRenderComponent(_component_GameWelcome, {
          variant: "dat-tin",
          layout: "classic",
          title: "Dat Tin",
          "title-accent": "🇳🇬",
          rules: unref(datTinRules),
          "play-label": "Play Now",
          onStart: unref(startFromWelcome)
        }, null, _parent));
      } else if (unref(phase) === "setup") {
        _push(ssrRenderComponent(_component_DatTinSetup, {
          "round-duration": unref(roundDuration),
          "load-error": unref(loadError),
          "is-deck-selected": unref(isDeckSelected),
          onToggleDeck: unref(toggleDeck),
          onStartWithTeams: unref(setupAndStartGame),
          onSetDuration: unref(setRoundDuration)
        }, null, _parent));
      } else if (unref(phase) === "countdown") {
        _push(ssrRenderComponent(_component_DatTinCountdown, {
          countdown: unref(countdown),
          "team-name": unref(currentTeam)?.name,
          onSkip: unref(skipCountdown)
        }, null, _parent));
      } else if (unref(phase) === "playing") {
        _push(ssrRenderComponent(_component_DatTinPlaying, {
          "team-name": unref(currentTeam)?.name,
          "team-indicator-style": unref(teamIndicatorStyle)(unref(currentTeam)),
          "round-score": unref(roundScore),
          "score-anim-key": unref(scoreAnimKey),
          "time-left": unref(timeLeft),
          card: unref(currentCard),
          "card-anim-key": unref(cardAnimKey),
          "is-paused": unref(isPaused),
          onPass: unref(handlePass),
          onCorrect: unref(handleCorrect),
          onTogglePause: unref(togglePause),
          onQuit: unref(quitGame)
        }, null, _parent));
      } else if (unref(phase) === "review") {
        _push(ssrRenderComponent(_component_DatTinReview, {
          "round-cards": unref(roundCards),
          "review-score": unref(reviewScore),
          onToggleStatus: unref(toggleCardStatus),
          onConfirm: unref(confirmScore)
        }, null, _parent));
      } else if (unref(phase) === "roundOver") {
        _push(ssrRenderComponent(_component_DatTinRoundOver, {
          teams: unref(sortedTeams),
          "leading-team": unref(leadingTeam),
          "next-round-label": unref(nextRoundLabel),
          "leader-style": unref(leaderGradientStyle)(unref(leadingTeam)),
          "scoreboard-item-style": unref(scoreboardItemStyle),
          onNextRound: unref(startCountdown),
          onNewGame: unref(resetGame)
        }, null, _parent));
      } else {
        _push(ssrRenderComponent(_component_DatTinGameOver, {
          teams: unref(sortedTeams),
          champion: unref(champion),
          "scoreboard-item-style": unref(scoreboardItemStyle),
          "medal-for-place": unref(medalForPlace),
          onPlayAgain: unref(resetGame)
        }, null, _parent));
      }
      _push(`</main></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/games/dat-tin.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=dat-tin-Dh6mCctD.mjs.map
