import { _ as __nuxt_component_0 } from './nuxt-link-CXiEearW.mjs';
import { mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "game-page imposter-theme" }, _attrs))}><div class="container"><nav class="nav-row" aria-label="Game navigation">`);
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
  _push(`</nav><section class="game-stage"><p class="eyebrow">Imposter</p><h1 class="game-title">Who dey disguise?</h1><p class="game-description"> The hidden role game lives here. This route is ready for player setup, secret role reveal, discussion, voting, and resolution from the existing React prototype. </p><div class="action-row"><button class="btn" type="button">Add players</button>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "btn secondary",
    to: "/"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Choose another game`);
      } else {
        return [
          createTextVNode("Choose another game")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></section></div></main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/games/imposter.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const imposter = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { imposter as default };
//# sourceMappingURL=imposter-CbsrHxow.mjs.map
