import { defineComponent, mergeProps, withCtx, unref, createVNode, openBlock, createBlock, ref, computed, createTextVNode, toDisplayString, Fragment, renderList, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderClass, ssrRenderSlot, ssrRenderList, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderAttr } from 'vue/server-renderer';
import { _ as __nuxt_component_1$1, a as __nuxt_component_1$2 } from './GameWelcome-D1-YXX4Q.mjs';
import { _ as __nuxt_component_0$3 } from './nuxt-link-CXiEearW.mjs';
import { _ as _export_sfc } from './server.mjs';
import { i as imposterRules } from './games-HseoQX6m.mjs';
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
  __name: "GameShell",
  __ssrInlineRender: true,
  props: {
    theme: {},
    narrow: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    const wrapClass = computed(() => {
      if (props.theme === "imposter" || props.narrow) return "imposter-wrap";
      return "container";
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(mergeProps({
        class: ["game-page", `${__props.theme}-theme`]
      }, _attrs))}><div class="${ssrRenderClass(unref(wrapClass))}">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></main>`);
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/game/GameShell.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const __nuxt_component_0$2 = Object.assign(_sfc_main$b, { __name: "GameShell" });
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "GameNav",
  __ssrInlineRender: true,
  props: {
    theme: {}
  },
  setup(__props) {
    const props = __props;
    const navClass = computed(() => props.theme === "imposter" ? "imposter-nav" : "nav-row");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$3;
      _push(`<nav${ssrRenderAttrs(mergeProps({
        class: unref(navClass),
        "aria-label": "Game navigation"
      }, _attrs))}>`);
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
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/game/GameNav.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __nuxt_component_2 = Object.assign(_sfc_main$a, { __name: "GameNav" });
const _sfc_main$9 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "imposter-header" }, _attrs))}><span>Party game</span><h1>Imposter <em>Hunt</em></h1></div>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/games/imposter/ImposterHeader.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender]]), { __name: "ImposterHeader" });
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "ImposterWelcome",
  __ssrInlineRender: true,
  emits: ["start"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ImposterHeader = __nuxt_component_0$1;
      const _component_GameWelcome = __nuxt_component_1$2;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "imposter-welcome" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_ImposterHeader, null, null, _parent));
      _push(ssrRenderComponent(_component_GameWelcome, {
        variant: "imposter",
        title: "Imposter Hunt",
        description: "One player is faking it. Everyone else knows the secret word. Can you smoke them out?",
        rules: unref(imposterRules),
        "play-label": "Start setup",
        onStart: ($event) => emit("start")
      }, null, _parent));
      _push(`</section>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/games/imposter/ImposterWelcome.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_3 = Object.assign(_sfc_main$8, { __name: "ImposterWelcome" });
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "PlayerListEditor",
  __ssrInlineRender: true,
  props: {
    players: {},
    modelValue: {},
    heading: { default: "Add Players" },
    placeholder: { default: "ENTER PLAYER NAME..." },
    addLabel: { default: "Add" },
    confirmLabel: { default: "Start Game" },
    minPlayers: { default: 3 },
    needMoreMessage: {}
  },
  emits: ["update:modelValue", "add", "remove", "confirm"],
  setup(__props, { emit: __emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "player-list-editor" }, _attrs))}><h2>${ssrInterpolate(__props.heading)}</h2><div class="player-entry"><input${ssrRenderAttr("value", __props.modelValue)}${ssrRenderAttr("placeholder", __props.placeholder)} type="text"><button class="neo-btn primary" type="button">${ssrInterpolate(__props.addLabel)}</button></div><ul class="player-list"><!--[-->`);
      ssrRenderList(__props.players, (player, index) => {
        _push(`<li><span>${ssrInterpolate(player)}</span><button class="neo-btn danger small" type="button">X</button></li>`);
      });
      _push(`<!--]--></ul>`);
      if (__props.players.length < __props.minPlayers) {
        _push(`<p class="need-players">${ssrInterpolate(__props.needMoreMessage ?? `Need at least ${__props.minPlayers} players (${__props.players.length}/${__props.minPlayers})`)}</p>`);
      } else {
        _push(`<button class="neo-btn success full" type="button">${ssrInterpolate(__props.confirmLabel)}</button>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/game/PlayerListEditor.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main$7, { __name: "PlayerListEditor" });
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "ImposterSetup",
  __ssrInlineRender: true,
  props: {
    categories: {},
    selectedCategory: {},
    players: {},
    newPlayerName: {}
  },
  emits: ["update:selectedCategory", "update:newPlayerName", "addPlayer", "removePlayer", "startGame"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ImposterHeader = __nuxt_component_0$1;
      const _component_PlayerListEditor = __nuxt_component_1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "imposter-card" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_ImposterHeader, null, null, _parent));
      _push(`<div class="phase-tag blue">Setup</div><h2>Select Category</h2><div class="category-grid"><!--[-->`);
      ssrRenderList(__props.categories, (category) => {
        _push(`<button class="${ssrRenderClass(["imposter-option", { active: __props.selectedCategory === category }])}" type="button">${ssrInterpolate(category)}</button>`);
      });
      _push(`<!--]--></div><hr>`);
      _push(ssrRenderComponent(_component_PlayerListEditor, {
        players: __props.players,
        "model-value": __props.newPlayerName,
        "onUpdate:modelValue": ($event) => emit("update:newPlayerName", $event),
        onAdd: ($event) => emit("addPlayer"),
        onRemove: ($event) => emit("removePlayer", $event),
        onConfirm: ($event) => emit("startGame")
      }, null, _parent));
      _push(`</section>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/games/imposter/ImposterSetup.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_4 = Object.assign(_sfc_main$6, { __name: "ImposterSetup" });
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "GameHandoff",
  __ssrInlineRender: true,
  props: {
    revealed: { type: Boolean },
    playerName: {},
    heading: {},
    revealLabel: {},
    hint: {},
    theme: { default: "imposter" },
    revealButtonVariant: { default: "primary" }
  },
  emits: ["reveal"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const revealButtonClass = computed(() => {
      if (props.theme === "imposter") {
        return ["neo-btn", props.revealButtonVariant === "primary" ? "primary" : "", "full"].filter(Boolean);
      }
      return ["btn", "btn-primary"];
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (!__props.revealed) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "handoff" }, _attrs))}><h2>${ssrInterpolate(__props.heading)}</h2><h1>${ssrInterpolate(__props.playerName)}</h1>`);
        if (__props.hint) {
          _push(`<p>${ssrInterpolate(__props.hint)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<button class="${ssrRenderClass(unref(revealButtonClass))}" type="button">${ssrInterpolate(__props.revealLabel)}</button></div>`);
      } else {
        _push(`<div${ssrRenderAttrs(_attrs)}>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</div>`);
      }
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/game/GameHandoff.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$5, { __name: "GameHandoff" });
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "ImposterPassReveal",
  __ssrInlineRender: true,
  props: {
    currentPlayer: {},
    isRoleVisible: { type: Boolean },
    isImposter: { type: Boolean },
    secretWord: {}
  },
  emits: ["reveal", "continue"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_GameHandoff = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "imposter-card" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_GameHandoff, {
        revealed: __props.isRoleVisible,
        "player-name": __props.currentPlayer,
        heading: "Pass the device to",
        "reveal-label": `I am ${__props.currentPlayer}`,
        hint: "Make sure no one else is looking!",
        onReveal: ($event) => emit("reveal")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="role-title"${_scopeId}><span${_scopeId}>🎯</span> Your Role</h2>`);
            if (__props.isImposter) {
              _push2(`<div class="role-box imposter"${_scopeId}><h3${_scopeId}>🔪 Imposter</h3><p${_scopeId}>Try to blend in. You do not know the secret word.</p></div>`);
            } else {
              _push2(`<div class="role-box crewmate"${_scopeId}><h3${_scopeId}>🧑‍🚀 Crewmate</h3><p${_scopeId}>The secret word is</p><strong${_scopeId}>${ssrInterpolate(__props.secretWord)}</strong></div>`);
            }
            _push2(`<button class="neo-btn danger full" type="button"${_scopeId}>Hide &amp; Continue</button>`);
          } else {
            return [
              createVNode("h2", { class: "role-title" }, [
                createVNode("span", null, "🎯"),
                createTextVNode(" Your Role")
              ]),
              __props.isImposter ? (openBlock(), createBlock("div", {
                key: 0,
                class: "role-box imposter"
              }, [
                createVNode("h3", null, "🔪 Imposter"),
                createVNode("p", null, "Try to blend in. You do not know the secret word.")
              ])) : (openBlock(), createBlock("div", {
                key: 1,
                class: "role-box crewmate"
              }, [
                createVNode("h3", null, "🧑‍🚀 Crewmate"),
                createVNode("p", null, "The secret word is"),
                createVNode("strong", null, toDisplayString(__props.secretWord), 1)
              ])),
              createVNode("button", {
                class: "neo-btn danger full",
                type: "button",
                onClick: ($event) => emit("continue")
              }, "Hide & Continue", 8, ["onClick"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/games/imposter/ImposterPassReveal.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_5 = Object.assign(_sfc_main$4, { __name: "ImposterPassReveal" });
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "ImposterDiscussion",
  __ssrInlineRender: true,
  emits: ["vote"],
  setup(__props, { emit: __emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "imposter-card discussion-card" }, _attrs))}><div class="phase-tag pink">Phase 03</div><h2><span>💬</span> Discussion</h2><p>Ask questions about the secret word. Find out who doesn&#39;t know it!</p><div class="discuss-box">Discuss!</div><button class="neo-btn danger full" type="button">Stop &amp; Vote Now</button></section>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/games/imposter/ImposterDiscussion.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_6 = Object.assign(_sfc_main$3, { __name: "ImposterDiscussion" });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ImposterVoting",
  __ssrInlineRender: true,
  props: {
    players: {},
    currentPlayer: {},
    voterIndex: {},
    isRoleVisible: { type: Boolean }
  },
  emits: ["ready", "vote"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_GameHandoff = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "imposter-card voting-card" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_GameHandoff, {
        revealed: __props.isRoleVisible,
        "player-name": __props.currentPlayer,
        heading: "Pass to vote secretly",
        "reveal-label": "Ready to vote",
        onReveal: ($event) => emit("ready")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="vote-panel"${_scopeId}><h2${_scopeId}>Who is the Imposter?</h2><!--[-->`);
            ssrRenderList(__props.players, (player, index) => {
              _push2(`<button class="neo-btn vote" type="button"${ssrIncludeBooleanAttr(index === __props.voterIndex) ? " disabled" : ""}${_scopeId}><span${_scopeId}>${ssrInterpolate(player)}</span>`);
              if (index === __props.voterIndex) {
                _push2(`<small${_scopeId}>You</small>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</button>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "vote-panel" }, [
                createVNode("h2", null, "Who is the Imposter?"),
                (openBlock(true), createBlock(Fragment, null, renderList(__props.players, (player, index) => {
                  return openBlock(), createBlock("button", {
                    key: `${player}-vote-${index}`,
                    class: "neo-btn vote",
                    type: "button",
                    disabled: index === __props.voterIndex,
                    onClick: ($event) => emit("vote", index)
                  }, [
                    createVNode("span", null, toDisplayString(player), 1),
                    index === __props.voterIndex ? (openBlock(), createBlock("small", { key: 0 }, "You")) : createCommentVNode("", true)
                  ], 8, ["disabled", "onClick"]);
                }), 128))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/games/imposter/ImposterVoting.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_7 = Object.assign(_sfc_main$2, { __name: "ImposterVoting" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ImposterResolution",
  __ssrInlineRender: true,
  props: {
    votedOutPlayer: {},
    actualImposter: {},
    secretWord: {},
    crewmatesWin: { type: Boolean }
  },
  emits: ["reset"],
  setup(__props, { emit: __emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "imposter-card resolution-card" }, _attrs))}><h2>Game Over!</h2><div class="result-box"><p>The group voted out: <strong class="red">${ssrInterpolate(__props.votedOutPlayer)}</strong></p><p>The actual Imposter was: <strong class="green">${ssrInterpolate(__props.actualImposter)}</strong></p></div>`);
      if (__props.crewmatesWin) {
        _push(`<h1 class="crewmates-win">Crewmates Win!</h1>`);
      } else {
        _push(`<h1 class="imposter-win">Imposter Wins!</h1>`);
      }
      _push(`<div class="secret-word"><p>The secret word was</p><strong>${ssrInterpolate(__props.secretWord)}</strong></div><button class="neo-btn primary full" type="button">Play Again</button></section>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/games/imposter/ImposterResolution.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_8 = Object.assign(_sfc_main$1, { __name: "ImposterResolution" });
const imposterWordCategories = {
  Movies: ["The Matrix", "Titanic", "Black Panther", "Inception", "Avatar", "The Godfather", "Jaws", "Toy Story", "Spider-Man", "Jurassic Park"],
  Events: ["Olympics", "World Cup", "Met Gala", "Super Bowl", "Coachella", "Comic-Con", "Election Day", "Christmas", "New Year"],
  "Naija Slangs": ["Sapa", "Wahala", "Japa", "Odogwu", "Aza", "Trenches", "E Choke", "Bant", "Gbas Gbos", "Idan", "Soro Soke"],
  "Pop Culture": ["TikTok", "Cancel Culture", "K-Pop", "Euphoria", "Memes", "Influencer", "Viral Video", "Stan Twitter", "Podcasts"]
};
function useImposterGame() {
  const phase = ref("welcome");
  const selectedCategory = ref("Movies");
  const players = ref([]);
  const newPlayerName = ref("");
  const currentWord = ref("");
  const imposterIndex = ref(null);
  const currentPlayerIndex = ref(0);
  const isRoleVisible = ref(false);
  const votes = ref([]);
  const votedOutIndex = ref(null);
  const votedOutPlayer = ref("");
  const categoryNames = computed(() => Object.keys(imposterWordCategories));
  const currentPlayer = computed(() => players.value[currentPlayerIndex.value] ?? "");
  const actualImposter = computed(
    () => imposterIndex.value === null ? "" : players.value[imposterIndex.value]
  );
  function goToSetup() {
    phase.value = "setup";
  }
  function addPlayer() {
    const name = newPlayerName.value.trim();
    if (!name) return;
    players.value = [...players.value, name];
    newPlayerName.value = "";
  }
  function removePlayer(index) {
    players.value = players.value.filter((_, playerIndex) => playerIndex !== index);
  }
  function startGame() {
    if (players.value.length < 3) return;
    imposterIndex.value = Math.floor(Math.random() * players.value.length);
    const words = imposterWordCategories[selectedCategory.value];
    currentWord.value = words[Math.floor(Math.random() * words.length)];
    currentPlayerIndex.value = 0;
    isRoleVisible.value = false;
    votedOutIndex.value = null;
    votedOutPlayer.value = "";
    phase.value = "passReveal";
  }
  function nextPlayerReveal() {
    isRoleVisible.value = false;
    if (currentPlayerIndex.value < players.value.length - 1) {
      currentPlayerIndex.value += 1;
      return;
    }
    phase.value = "discussion";
  }
  function startVoting() {
    currentPlayerIndex.value = 0;
    isRoleVisible.value = false;
    votes.value = new Array(players.value.length).fill(0);
    phase.value = "voting";
  }
  function castVote(votedForIndex) {
    const nextVotes = [...votes.value];
    nextVotes[votedForIndex] += 1;
    votes.value = nextVotes;
    isRoleVisible.value = false;
    if (currentPlayerIndex.value < players.value.length - 1) {
      currentPlayerIndex.value += 1;
      return;
    }
    resolveGame(nextVotes);
  }
  function resolveGame(finalVotes) {
    let maxVotes = 0;
    let playerWithMostVotes = -1;
    finalVotes.forEach((voteCount, index) => {
      if (voteCount > maxVotes) {
        maxVotes = voteCount;
        playerWithMostVotes = index;
      }
    });
    votedOutIndex.value = playerWithMostVotes;
    votedOutPlayer.value = players.value[playerWithMostVotes];
    phase.value = "resolution";
  }
  function resetGame() {
    phase.value = "welcome";
    currentPlayerIndex.value = 0;
    isRoleVisible.value = false;
    votes.value = [];
    votedOutIndex.value = null;
    votedOutPlayer.value = "";
  }
  return {
    phase,
    selectedCategory,
    players,
    newPlayerName,
    currentWord,
    imposterIndex,
    currentPlayerIndex,
    isRoleVisible,
    votedOutIndex,
    votedOutPlayer,
    categoryNames,
    currentPlayer,
    actualImposter,
    goToSetup,
    addPlayer,
    removePlayer,
    startGame,
    nextPlayerReveal,
    startVoting,
    castVote,
    resetGame
  };
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "imposter",
  __ssrInlineRender: true,
  setup(__props) {
    const {
      phase,
      selectedCategory,
      players,
      newPlayerName,
      currentWord,
      imposterIndex,
      currentPlayerIndex,
      isRoleVisible,
      votedOutIndex,
      votedOutPlayer,
      categoryNames,
      currentPlayer,
      actualImposter,
      goToSetup,
      addPlayer,
      removePlayer,
      startGame,
      nextPlayerReveal,
      startVoting,
      castVote,
      resetGame
    } = useImposterGame();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_GameShell = __nuxt_component_0$2;
      const _component_GameLobbyLink = __nuxt_component_1$1;
      const _component_GameNav = __nuxt_component_2;
      const _component_ImposterWelcome = __nuxt_component_3;
      const _component_ImposterSetup = __nuxt_component_4;
      const _component_ImposterPassReveal = __nuxt_component_5;
      const _component_ImposterDiscussion = __nuxt_component_6;
      const _component_ImposterVoting = __nuxt_component_7;
      const _component_ImposterResolution = __nuxt_component_8;
      _push(ssrRenderComponent(_component_GameShell, mergeProps({
        theme: "imposter",
        narrow: ""
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_GameLobbyLink, { theme: "imposter" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_GameNav, { theme: "imposter" }, null, _parent2, _scopeId));
            if (unref(phase) === "welcome") {
              _push2(ssrRenderComponent(_component_ImposterWelcome, { onStart: unref(goToSetup) }, null, _parent2, _scopeId));
            } else if (unref(phase) === "setup") {
              _push2(ssrRenderComponent(_component_ImposterSetup, {
                categories: unref(categoryNames),
                "selected-category": unref(selectedCategory),
                players: unref(players),
                "new-player-name": unref(newPlayerName),
                "onUpdate:selectedCategory": ($event) => selectedCategory.value = $event,
                "onUpdate:newPlayerName": ($event) => newPlayerName.value = $event,
                onAddPlayer: unref(addPlayer),
                onRemovePlayer: unref(removePlayer),
                onStartGame: unref(startGame)
              }, null, _parent2, _scopeId));
            } else if (unref(phase) === "passReveal") {
              _push2(ssrRenderComponent(_component_ImposterPassReveal, {
                "current-player": unref(currentPlayer),
                "is-role-visible": unref(isRoleVisible),
                "is-imposter": unref(currentPlayerIndex) === unref(imposterIndex),
                "secret-word": unref(currentWord),
                onReveal: ($event) => isRoleVisible.value = true,
                onContinue: unref(nextPlayerReveal)
              }, null, _parent2, _scopeId));
            } else if (unref(phase) === "discussion") {
              _push2(ssrRenderComponent(_component_ImposterDiscussion, { onVote: unref(startVoting) }, null, _parent2, _scopeId));
            } else if (unref(phase) === "voting") {
              _push2(ssrRenderComponent(_component_ImposterVoting, {
                players: unref(players),
                "current-player": unref(currentPlayer),
                "voter-index": unref(currentPlayerIndex),
                "is-role-visible": unref(isRoleVisible),
                onReady: ($event) => isRoleVisible.value = true,
                onVote: unref(castVote)
              }, null, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(_component_ImposterResolution, {
                "voted-out-player": unref(votedOutPlayer),
                "actual-imposter": unref(actualImposter),
                "secret-word": unref(currentWord),
                "crewmates-win": unref(votedOutIndex) === unref(imposterIndex),
                onReset: unref(resetGame)
              }, null, _parent2, _scopeId));
            }
          } else {
            return [
              createVNode(_component_GameLobbyLink, { theme: "imposter" }),
              createVNode(_component_GameNav, { theme: "imposter" }),
              unref(phase) === "welcome" ? (openBlock(), createBlock(_component_ImposterWelcome, {
                key: 0,
                onStart: unref(goToSetup)
              }, null, 8, ["onStart"])) : unref(phase) === "setup" ? (openBlock(), createBlock(_component_ImposterSetup, {
                key: 1,
                categories: unref(categoryNames),
                "selected-category": unref(selectedCategory),
                players: unref(players),
                "new-player-name": unref(newPlayerName),
                "onUpdate:selectedCategory": ($event) => selectedCategory.value = $event,
                "onUpdate:newPlayerName": ($event) => newPlayerName.value = $event,
                onAddPlayer: unref(addPlayer),
                onRemovePlayer: unref(removePlayer),
                onStartGame: unref(startGame)
              }, null, 8, ["categories", "selected-category", "players", "new-player-name", "onUpdate:selectedCategory", "onUpdate:newPlayerName", "onAddPlayer", "onRemovePlayer", "onStartGame"])) : unref(phase) === "passReveal" ? (openBlock(), createBlock(_component_ImposterPassReveal, {
                key: 2,
                "current-player": unref(currentPlayer),
                "is-role-visible": unref(isRoleVisible),
                "is-imposter": unref(currentPlayerIndex) === unref(imposterIndex),
                "secret-word": unref(currentWord),
                onReveal: ($event) => isRoleVisible.value = true,
                onContinue: unref(nextPlayerReveal)
              }, null, 8, ["current-player", "is-role-visible", "is-imposter", "secret-word", "onReveal", "onContinue"])) : unref(phase) === "discussion" ? (openBlock(), createBlock(_component_ImposterDiscussion, {
                key: 3,
                onVote: unref(startVoting)
              }, null, 8, ["onVote"])) : unref(phase) === "voting" ? (openBlock(), createBlock(_component_ImposterVoting, {
                key: 4,
                players: unref(players),
                "current-player": unref(currentPlayer),
                "voter-index": unref(currentPlayerIndex),
                "is-role-visible": unref(isRoleVisible),
                onReady: ($event) => isRoleVisible.value = true,
                onVote: unref(castVote)
              }, null, 8, ["players", "current-player", "voter-index", "is-role-visible", "onReady", "onVote"])) : (openBlock(), createBlock(_component_ImposterResolution, {
                key: 5,
                "voted-out-player": unref(votedOutPlayer),
                "actual-imposter": unref(actualImposter),
                "secret-word": unref(currentWord),
                "crewmates-win": unref(votedOutIndex) === unref(imposterIndex),
                onReset: unref(resetGame)
              }, null, 8, ["voted-out-player", "actual-imposter", "secret-word", "crewmates-win", "onReset"]))
            ];
          }
        }),
        _: 1
      }, _parent));
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
//# sourceMappingURL=imposter-Dt2lK7S7.mjs.map
