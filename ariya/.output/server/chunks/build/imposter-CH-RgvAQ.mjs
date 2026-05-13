import { _ as __nuxt_component_0 } from './nuxt-link-CXiEearW.mjs';
import { defineComponent, ref, computed, mergeProps, withCtx, createVNode, createTextVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr } from 'vue/server-renderer';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "imposter",
  __ssrInlineRender: true,
  setup(__props) {
    const wordCategories = {
      Movies: ["The Matrix", "Titanic", "Black Panther", "Inception", "Avatar", "The Godfather", "Jaws", "Toy Story", "Spider-Man", "Jurassic Park"],
      Events: ["Olympics", "World Cup", "Met Gala", "Super Bowl", "Coachella", "Comic-Con", "Election Day", "Christmas", "New Year"],
      "Naija Slangs": ["Sapa", "Wahala", "Japa", "Odogwu", "Aza", "Trenches", "E Choke", "Bant", "Gbas Gbos", "Idan", "Soro Soke"],
      "Pop Culture": ["TikTok", "Cancel Culture", "K-Pop", "Euphoria", "Memes", "Influencer", "Viral Video", "Stan Twitter", "Podcasts"]
    };
    const gamePhase = ref("setup");
    const selectedCategory = ref("Movies");
    const players = ref([]);
    const newPlayerName = ref("");
    const currentWord = ref("");
    const imposterIndex = ref(null);
    const currentPlayerIndex = ref(0);
    const isRoleVisible = ref(false);
    ref([]);
    const votedOutIndex = ref(null);
    const votedOutPlayer = ref("");
    const categoryNames = computed(() => Object.keys(wordCategories));
    const currentPlayer = computed(() => players.value[currentPlayerIndex.value] ?? "");
    const actualImposter = computed(() => imposterIndex.value === null ? "" : players.value[imposterIndex.value]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "game-page imposter-theme" }, _attrs))}><div class="imposter-wrap"><nav class="imposter-nav" aria-label="Game navigation">`);
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
      _push(`</nav><div class="imposter-header"><span>Party game</span><h1>Imposter <em>Hunt</em></h1></div>`);
      if (unref(gamePhase) === "setup") {
        _push(`<section class="imposter-card"><div class="phase-tag blue">Setup</div><h2>Select Category</h2><div class="category-grid"><!--[-->`);
        ssrRenderList(unref(categoryNames), (category) => {
          _push(`<button class="${ssrRenderClass(["imposter-option", { active: unref(selectedCategory) === category }])}" type="button">${ssrInterpolate(category)}</button>`);
        });
        _push(`<!--]--></div><hr><h2>Add Players</h2><div class="player-entry"><input${ssrRenderAttr("value", unref(newPlayerName))} placeholder="ENTER PLAYER NAME..." type="text"><button class="neo-btn primary" type="button">Add</button></div><ul class="player-list"><!--[-->`);
        ssrRenderList(unref(players), (player, index) => {
          _push(`<li><span>${ssrInterpolate(player)}</span><button class="neo-btn danger small" type="button">X</button></li>`);
        });
        _push(`<!--]--></ul>`);
        if (unref(players).length < 3) {
          _push(`<div class="need-players"> Need at least 3 players (${ssrInterpolate(unref(players).length)}/3) </div>`);
        } else {
          _push(`<button class="neo-btn success full" type="button">Start Game</button>`);
        }
        _push(`</section>`);
      } else if (unref(gamePhase) === "passReveal") {
        _push(`<section class="imposter-card">`);
        if (!unref(isRoleVisible)) {
          _push(`<div class="handoff"><h2>Pass the device to</h2><h1>${ssrInterpolate(unref(currentPlayer))}</h1><p>Make sure no one else is looking!</p><button class="neo-btn primary full" type="button"> I am ${ssrInterpolate(unref(currentPlayer))}</button></div>`);
        } else {
          _push(`<div><h2 class="role-title"><span>🎯</span> Your Role</h2>`);
          if (unref(currentPlayerIndex) === unref(imposterIndex)) {
            _push(`<div class="role-box imposter"><h3>🔪 Imposter</h3><p>Try to blend in. You do not know the secret word.</p></div>`);
          } else {
            _push(`<div class="role-box crewmate"><h3>🧑‍🚀 Crewmate</h3><p>The secret word is</p><strong>${ssrInterpolate(unref(currentWord))}</strong></div>`);
          }
          _push(`<button class="neo-btn danger full" type="button">Hide &amp; Continue</button></div>`);
        }
        _push(`</section>`);
      } else if (unref(gamePhase) === "discussion") {
        _push(`<section class="imposter-card discussion-card"><div class="phase-tag pink">Phase 03</div><h2><span>💬</span> Discussion</h2><p>Ask questions about the secret word. Find out who doesn&#39;t know it!</p><div class="discuss-box">Discuss!</div><button class="neo-btn danger full" type="button">Stop &amp; Vote Now</button></section>`);
      } else if (unref(gamePhase) === "voting") {
        _push(`<section class="imposter-card voting-card">`);
        if (!unref(isRoleVisible)) {
          _push(`<div class="handoff"><h2>Pass to vote secretly</h2><h1>${ssrInterpolate(unref(currentPlayer))}</h1><button class="neo-btn primary full" type="button">Ready to vote</button></div>`);
        } else {
          _push(`<div class="vote-panel"><h2>Who is the Imposter?</h2><!--[-->`);
          ssrRenderList(unref(players), (player, index) => {
            _push(`<button class="neo-btn vote" type="button"${ssrIncludeBooleanAttr(index === unref(currentPlayerIndex)) ? " disabled" : ""}><span>${ssrInterpolate(player)}</span>`);
            if (index === unref(currentPlayerIndex)) {
              _push(`<small>You</small>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</button>`);
          });
          _push(`<!--]--></div>`);
        }
        _push(`</section>`);
      } else {
        _push(`<section class="imposter-card resolution-card"><h2>Game Over!</h2><div class="result-box"><p>The group voted out: <strong class="red">${ssrInterpolate(unref(votedOutPlayer))}</strong></p><p>The actual Imposter was: <strong class="green">${ssrInterpolate(unref(actualImposter))}</strong></p></div>`);
        if (unref(votedOutIndex) === unref(imposterIndex)) {
          _push(`<h1 class="crewmates-win">Crewmates Win!</h1>`);
        } else {
          _push(`<h1 class="imposter-win">Imposter Wins!</h1>`);
        }
        _push(`<div class="secret-word"><p>The secret word was</p><strong>${ssrInterpolate(unref(currentWord))}</strong></div><button class="neo-btn primary full" type="button">Play Again</button></section>`);
      }
      _push(`</div></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/games/imposter.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=imposter-CH-RgvAQ.mjs.map
