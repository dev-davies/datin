import { _ as __nuxt_component_0 } from './nuxt-link-CXiEearW.mjs';
import { mergeProps, withCtx, createVNode, createTextVNode, defineComponent, unref, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { l as lobbyGames } from './games-HseoQX6m.mjs';
import { _ as _export_sfc } from './server.mjs';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "LobbyGameList",
  __ssrInlineRender: true,
  setup(__props) {
    const games = lobbyGames;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "game-list",
        "aria-label": "Available games"
      }, _attrs))}><!--[-->`);
      ssrRenderList(unref(games), (game) => {
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
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/lobby/LobbyGameList.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main$1, { __name: "LobbyGameList" });
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  const _component_LobbyGameList = __nuxt_component_1;
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
  _push(`</div></div>`);
  _push(ssrRenderComponent(_component_LobbyGameList, null, null, _parent));
  _push(`</section></div></main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-paPFuBGL.mjs.map
