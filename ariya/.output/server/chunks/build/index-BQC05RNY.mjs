import { _ as __nuxt_component_0 } from './nuxt-link-CXiEearW.mjs';
import { defineComponent, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
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
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const games = [
      {
        name: "Dat Tin",
        slug: "dat-tin",
        href: "/games/dat-tin",
        description: "A Naija-flavoured word guessing game with forbidden words, teams, timers, and plenty tension.",
        status: "Word party game"
      },
      {
        name: "Imposter",
        slug: "imposter",
        href: "/games/imposter",
        description: "Pass-and-play hidden role game where everyone knows the word except one sharp imposter.",
        status: "Hidden role game"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "page-shell" }, _attrs))}><div class="container"><nav class="nav-row" aria-label="Main navigation">`);
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
      _push(`<span class="back-link">Party games lobby</span></nav><section class="hero-grid"><div class="hero-panel"><p class="eyebrow">Play together</p><h1 class="hero-title">Ariya</h1><p class="hero-copy"> A dark themed home for loud laughs, quick rounds, and party games with their own vibe. Pick a game, pass the phone, and let the wahala begin. </p><div class="action-row">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "btn",
        to: "/games/dat-tin"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Start Dat Tin`);
          } else {
            return [
              createTextVNode("Start Dat Tin")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "btn secondary",
        to: "/games/imposter"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Find Imposter`);
          } else {
            return [
              createTextVNode("Find Imposter")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="game-list" aria-label="Available games"><!--[-->`);
      ssrRenderList(games, (game) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: game.slug,
          to: game.href,
          class: ["game-card", game.slug]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<article${_scopeId}><h2${_scopeId}>${ssrInterpolate(game.name)}</h2><p${_scopeId}>${ssrInterpolate(game.description)}</p><span${_scopeId}>${ssrInterpolate(game.status)}</span></article>`);
            } else {
              return [
                createVNode("article", null, [
                  createVNode("h2", null, toDisplayString(game.name), 1),
                  createVNode("p", null, toDisplayString(game.description), 1),
                  createVNode("span", null, toDisplayString(game.status), 1)
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></section></div></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BQC05RNY.mjs.map
