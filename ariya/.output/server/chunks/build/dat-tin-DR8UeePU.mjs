import { _ as __nuxt_component_0 } from './nuxt-link-CXiEearW.mjs';
import { defineComponent, ref, computed, mergeProps, withCtx, createVNode, createTextVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderStyle } from 'vue/server-renderer';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import './server.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'vue-router';

const countdownDuration = 10;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "dat-tin",
  __ssrInlineRender: true,
  setup(__props) {
    const deckOptions = [
      { key: "naija", label: "Naija", emoji: "🇳🇬", description: "Local food, slang, places, music, and culture." },
      { key: "global", label: "Global", emoji: "🌍", description: "Worldwide pop culture, places, and everyday words." }
    ];
    const teamCounts = [2, 3, 4];
    const durations = [
      { value: 30, label: "30s" },
      { value: 60, label: "60s" },
      { value: 90, label: "90s" },
      { value: 120, label: "120s" }
    ];
    const phase = ref("setup");
    const cardData = ref({ naija: [], global: [] });
    const loadError = ref("");
    const selectedDecks = ref(["naija"]);
    const teamCount = ref(2);
    const roundDuration = ref(30);
    const teams = ref([]);
    const currentTeamIndex = ref(0);
    ref(0);
    const shuffledCards = ref([]);
    const currentCardIndex = ref(0);
    const roundCards = ref([]);
    const roundScore = ref(0);
    const timeLeft = ref(30);
    const countdown = ref(countdownDuration);
    const isPaused = ref(false);
    const activeCards = computed(() => selectedDecks.value.flatMap((deck) => cardData.value[deck].map((card) => ({ ...card, category: deck }))));
    const canStart = computed(() => selectedDecks.value.length > 0 && activeCards.value.length > 0);
    const currentCard = computed(() => shuffledCards.value[currentCardIndex.value]);
    const currentTeam = computed(() => teams.value[currentTeamIndex.value]);
    const reviewScore = computed(() => roundCards.value.filter((card) => card.status === "correct").length);
    const sortedTeams = computed(() => [...teams.value].sort((a, b) => b.score - a.score));
    const champion = computed(() => sortedTeams.value[0]);
    function teamStyle(team) {
      return { "--team-color": team.color };
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "game-page dat-tin-theme" }, _attrs))}><div class="container"><nav class="nav-row" aria-label="Game navigation">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "brand-mark",
        to: "/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="brand-icon"${_scopeId}>A</span><span${_scopeId}>Ariya</span>`);
          } else {
            return [
              createVNode("span", { class: "brand-icon" }, "A"),
              createVNode("span", null, "Ariya")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "back-link",
        to: "/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Back to lobby`);
          } else {
            return [
              createTextVNode("Back to lobby")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</nav>`);
      if (unref(phase) === "setup") {
        _push(`<section class="dat-shell"><div class="dat-hero"><p class="eyebrow">Dat Tin</p><h1 class="game-title">No talk am.</h1><p class="game-description"> Describe the green word to your team without saying any of the forbidden words. Pick decks, teams, and round time, then pass the phone around. </p></div><div class="dat-panel"><h2>Choose decks</h2><div class="choice-grid"><!--[-->`);
        ssrRenderList(deckOptions, (deck) => {
          _push(`<button class="${ssrRenderClass(["choice-card", { active: unref(selectedDecks).includes(deck.key) }])}" type="button"><strong>${ssrInterpolate(deck.emoji)} ${ssrInterpolate(deck.label)}</strong><span>${ssrInterpolate(deck.description)}</span></button>`);
        });
        _push(`<!--]--></div><h2>Teams</h2><div class="pill-row"><!--[-->`);
        ssrRenderList(teamCounts, (count) => {
          _push(`<button class="${ssrRenderClass(["pill-btn", { active: unref(teamCount) === count }])}" type="button">${ssrInterpolate(count)}</button>`);
        });
        _push(`<!--]--></div><h2>Round time</h2><div class="pill-row"><!--[-->`);
        ssrRenderList(durations, (duration) => {
          _push(`<button class="${ssrRenderClass(["pill-btn", { active: unref(roundDuration) === duration.value }])}" type="button">${ssrInterpolate(duration.label)}</button>`);
        });
        _push(`<!--]--></div><button class="btn dat-primary" type="button"${ssrIncludeBooleanAttr(!unref(canStart)) ? " disabled" : ""}> Start game </button>`);
        if (unref(loadError)) {
          _push(`<p class="dat-warning">${ssrInterpolate(unref(loadError))}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></section>`);
      } else if (unref(phase) === "countdown") {
        _push(`<section class="dat-center-card"><p class="eyebrow">Get ready</p><h1 class="countdown-number">${ssrInterpolate(unref(countdown))}</h1><p class="game-description">${ssrInterpolate(unref(currentTeam)?.name)} is up next.</p><button class="btn dat-primary" type="button">Play now</button></section>`);
      } else if (unref(phase) === "playing") {
        _push(`<section class="play-layout"><header class="play-header"><div><p class="eyebrow">${ssrInterpolate(unref(currentTeam)?.name)}&#39;s turn</p><h1>${ssrInterpolate(unref(roundScore))} point${ssrInterpolate(unref(roundScore) === 1 ? "" : "s")}</h1></div><div class="${ssrRenderClass([{ danger: unref(timeLeft) <= 10 }, "timer-badge"])}">${ssrInterpolate(unref(timeLeft))}</div></header>`);
        if (unref(currentCard)) {
          _push(`<article class="word-card"><p>Dat Tin</p><h2>${ssrInterpolate(unref(currentCard).targetWord)}</h2><div><!--[-->`);
          ssrRenderList(unref(currentCard).forbiddenWords, (word) => {
            _push(`<span>${ssrInterpolate(word)}</span>`);
          });
          _push(`<!--]--></div></article>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="play-actions"><button class="btn secondary" type="button">Pass</button><button class="btn dat-primary" type="button">Correct</button><button class="btn secondary" type="button">${ssrInterpolate(unref(isPaused) ? "Resume" : "Pause")}</button></div></section>`);
      } else if (unref(phase) === "review") {
        _push(`<section class="dat-center-card"><p class="eyebrow">Review round</p><h1 class="game-title">${ssrInterpolate(unref(reviewScore))} point${ssrInterpolate(unref(reviewScore) === 1 ? "" : "s")}</h1><div class="review-list"><!--[-->`);
        ssrRenderList(unref(roundCards), (item, index) => {
          _push(`<button class="${ssrRenderClass(["review-item", item.status])}" type="button"><span>${ssrInterpolate(item.word)}</span><strong>${ssrInterpolate(item.status === "correct" ? "Correct" : "Pass")}</strong></button>`);
        });
        _push(`<!--]--></div><button class="btn dat-primary" type="button">Confirm score</button></section>`);
      } else if (unref(phase) === "roundOver") {
        _push(`<section class="dat-center-card"><p class="eyebrow">Round over</p><h1 class="game-title">Current scores</h1><div class="score-grid"><!--[-->`);
        ssrRenderList(unref(sortedTeams), (team) => {
          _push(`<div class="score-card" style="${ssrRenderStyle(teamStyle(team))}"><span>${ssrInterpolate(team.name)}</span><strong>${ssrInterpolate(team.score)}</strong></div>`);
        });
        _push(`<!--]--></div><button class="btn dat-primary" type="button"> Start ${ssrInterpolate(unref(currentTeam)?.name)}&#39;s turn </button></section>`);
      } else {
        _push(`<section class="dat-center-card"><p class="eyebrow">Champion</p><h1 class="game-title">${ssrInterpolate(unref(champion)?.name)}</h1><p class="game-description">${ssrInterpolate(unref(champion)?.score)} total points. Oya, run it back?</p><div class="score-grid"><!--[-->`);
        ssrRenderList(unref(sortedTeams), (team) => {
          _push(`<div class="score-card" style="${ssrRenderStyle(teamStyle(team))}"><span>${ssrInterpolate(team.name)}</span><strong>${ssrInterpolate(team.score)}</strong></div>`);
        });
        _push(`<!--]--></div><button class="btn dat-primary" type="button">New game</button></section>`);
      }
      _push(`</div></main>`);
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
//# sourceMappingURL=dat-tin-DR8UeePU.mjs.map
