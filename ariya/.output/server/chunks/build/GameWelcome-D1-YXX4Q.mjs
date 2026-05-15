import { _ as __nuxt_component_0$1 } from './nuxt-link-CXiEearW.mjs';
import { defineComponent, computed, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttrs, ssrRenderStyle, ssrRenderClass, ssrRenderList } from 'vue/server-renderer';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "GameLobbyLink",
  __ssrInlineRender: true,
  props: {
    theme: { default: "dat-tin" },
    label: { default: "← Ariya lobby" }
  },
  setup(__props) {
    const props = __props;
    const linkClass = computed(
      () => props.theme === "dat-tin" ? "dat-tin-lobby-link" : "game-lobby-link"
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        class: unref(linkClass),
        to: "/"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(__props.label)}`);
          } else {
            return [
              createTextVNode(toDisplayString(__props.label), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/game/GameLobbyLink.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1$1 = Object.assign(_sfc_main$2, { __name: "GameLobbyLink" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "GameRuleList",
  __ssrInlineRender: true,
  props: {
    rules: {},
    variant: { default: "default" },
    layout: { default: "card" },
    useHtml: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    const listClass = computed(() => {
      if (props.layout === "classic") return "instructions-list";
      return ["game-rules", props.variant];
    });
    const itemClass = computed(() => props.layout === "classic" ? "instruction-item" : "game-rule");
    const iconClass = computed(() => props.layout === "classic" ? "instruction-icon" : "game-rule-icon");
    const textClass = computed(() => props.layout === "classic" ? "instruction-text" : "game-rule-text");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<ul${ssrRenderAttrs(mergeProps({ class: unref(listClass) }, _attrs))}><!--[-->`);
      ssrRenderList(__props.rules, (rule, index) => {
        _push(`<li class="${ssrRenderClass(unref(itemClass))}"><span class="${ssrRenderClass(unref(iconClass))}" aria-hidden="true">${ssrInterpolate(rule.icon)}</span>`);
        if (rule.html && __props.useHtml) {
          _push(`<span class="${ssrRenderClass(unref(textClass))}">${rule.html ?? ""}</span>`);
        } else {
          _push(`<span class="${ssrRenderClass(unref(textClass))}">${ssrInterpolate(rule.text)}</span>`);
        }
        _push(`</li>`);
      });
      _push(`<!--]--></ul>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/game/GameRuleList.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$1, { __name: "GameRuleList" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "GameWelcome",
  __ssrInlineRender: true,
  props: {
    title: {},
    rules: {},
    variant: {},
    layout: { default: "card" },
    eyebrow: {},
    titleAccent: {},
    description: {},
    playLabel: { default: "Play now" }
  },
  emits: ["start"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const playButtonClass = computed(() => {
      if (props.variant === "imposter") return "neo-btn success full";
      return "btn dat-primary game-welcome-play";
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_GameRuleList = __nuxt_component_0;
      if (__props.layout === "classic") {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "title-screen" }, _attrs))}><h1>${ssrInterpolate(__props.title)} `);
        if (__props.titleAccent) {
          _push(`<span style="${ssrRenderStyle({ "font-size": "75%" })}">${ssrInterpolate(__props.titleAccent)}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</h1><div class="instructions-box"><div class="instructions-heading">How To Play</div>`);
        _push(ssrRenderComponent(_component_GameRuleList, {
          rules: __props.rules,
          layout: "classic",
          "use-html": true
        }, null, _parent));
        _push(`<button class="btn btn-primary btn-play-now" type="button">${ssrInterpolate(__props.playLabel)}</button></div></div>`);
      } else {
        _push(`<section${ssrRenderAttrs(mergeProps({
          class: ["game-welcome", __props.variant]
        }, _attrs))}><header class="game-welcome-header">`);
        if (__props.eyebrow) {
          _push(`<p class="eyebrow">${ssrInterpolate(__props.eyebrow)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<h1 class="game-welcome-title">${ssrInterpolate(__props.title)} `);
        if (__props.titleAccent) {
          _push(`<span class="game-welcome-accent">${ssrInterpolate(__props.titleAccent)}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</h1>`);
        if (__props.description) {
          _push(`<p class="game-description">${ssrInterpolate(__props.description)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</header><div class="game-welcome-rules"><h2 class="game-welcome-rules-heading">How to play</h2>`);
        _push(ssrRenderComponent(_component_GameRuleList, {
          rules: __props.rules,
          variant: __props.variant
        }, null, _parent));
        _push(`</div><button class="${ssrRenderClass(unref(playButtonClass))}" type="button">${ssrInterpolate(__props.playLabel)}</button></section>`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/game/GameWelcome.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main, { __name: "GameWelcome" });

export { __nuxt_component_1$1 as _, __nuxt_component_1 as a };
//# sourceMappingURL=GameWelcome-D1-YXX4Q.mjs.map
