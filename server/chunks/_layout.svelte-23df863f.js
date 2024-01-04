import { c as create_ssr_component, v as validate_component, a as compute_rest_props, b as spread, e as escape_object, d as escape_attribute_value, f as subscribe } from './index2-613b03a1.js';
import { c as classnames } from './Offcanvas.svelte_svelte_type_style_lang-c11e389a.js';
import { p as page } from './stores-9e684fc1.js';
import { m as mortgage, g as generateCurrentConfigurationURLParams } from './mortgage-e00d7466.js';
import { c as activeLaws, h as house, u as user } from './active-laws-5baaf082.js';
import './index-d5733251.js';

const Container = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classes;
  let $$restProps = compute_rest_props($$props, ["class", "sm", "md", "lg", "xl", "xxl", "fluid"]);
  let { class: className = "" } = $$props;
  let { sm = void 0 } = $$props;
  let { md = void 0 } = $$props;
  let { lg = void 0 } = $$props;
  let { xl = void 0 } = $$props;
  let { xxl = void 0 } = $$props;
  let { fluid = false } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.sm === void 0 && $$bindings.sm && sm !== void 0)
    $$bindings.sm(sm);
  if ($$props.md === void 0 && $$bindings.md && md !== void 0)
    $$bindings.md(md);
  if ($$props.lg === void 0 && $$bindings.lg && lg !== void 0)
    $$bindings.lg(lg);
  if ($$props.xl === void 0 && $$bindings.xl && xl !== void 0)
    $$bindings.xl(xl);
  if ($$props.xxl === void 0 && $$bindings.xxl && xxl !== void 0)
    $$bindings.xxl(xxl);
  if ($$props.fluid === void 0 && $$bindings.fluid && fluid !== void 0)
    $$bindings.fluid(fluid);
  classes = classnames(className, {
    "container-sm": sm,
    "container-md": md,
    "container-lg": lg,
    "container-xl": xl,
    "container-xxl": xxl,
    "container-fluid": fluid,
    container: !sm && !md && !lg && !xl && !xxl && !fluid
  });
  return `<div${spread([escape_object($$restProps), { class: escape_attribute_value(classes) }], {})}>${slots.default ? slots.default({}) : ``}</div>`;
});
function getVerticalClass(vertical) {
  if (vertical === false) {
    return false;
  } else if (vertical === true || vertical === "xs") {
    return "flex-column";
  }
  return `flex-${vertical}-column`;
}
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classes;
  let $$restProps = compute_rest_props($$props, [
    "class",
    "tabs",
    "pills",
    "vertical",
    "horizontal",
    "justified",
    "fill",
    "navbar",
    "card"
  ]);
  let { class: className = "" } = $$props;
  let { tabs = false } = $$props;
  let { pills = false } = $$props;
  let { vertical = false } = $$props;
  let { horizontal = "" } = $$props;
  let { justified = false } = $$props;
  let { fill = false } = $$props;
  let { navbar = false } = $$props;
  let { card = false } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.tabs === void 0 && $$bindings.tabs && tabs !== void 0)
    $$bindings.tabs(tabs);
  if ($$props.pills === void 0 && $$bindings.pills && pills !== void 0)
    $$bindings.pills(pills);
  if ($$props.vertical === void 0 && $$bindings.vertical && vertical !== void 0)
    $$bindings.vertical(vertical);
  if ($$props.horizontal === void 0 && $$bindings.horizontal && horizontal !== void 0)
    $$bindings.horizontal(horizontal);
  if ($$props.justified === void 0 && $$bindings.justified && justified !== void 0)
    $$bindings.justified(justified);
  if ($$props.fill === void 0 && $$bindings.fill && fill !== void 0)
    $$bindings.fill(fill);
  if ($$props.navbar === void 0 && $$bindings.navbar && navbar !== void 0)
    $$bindings.navbar(navbar);
  if ($$props.card === void 0 && $$bindings.card && card !== void 0)
    $$bindings.card(card);
  classes = classnames(className, navbar ? "navbar-nav" : "nav", horizontal ? `justify-content-${horizontal}` : false, getVerticalClass(vertical), {
    "nav-tabs": tabs,
    "card-header-tabs": card && tabs,
    "nav-pills": pills,
    "card-header-pills": card && pills,
    "nav-justified": justified,
    "nav-fill": fill
  });
  return `<ul${spread([escape_object($$restProps), { class: escape_attribute_value(classes) }], {})}>${slots.default ? slots.default({}) : ``}</ul>`;
});
const NavItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classes;
  let $$restProps = compute_rest_props($$props, ["class", "active"]);
  let { class: className = "" } = $$props;
  let { active = false } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  classes = classnames(className, "nav-item", active ? "active" : false);
  return `<li${spread([escape_object($$restProps), { class: escape_attribute_value(classes) }], {})}>${slots.default ? slots.default({}) : ``}</li>`;
});
const NavLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classes;
  let $$restProps = compute_rest_props($$props, ["class", "disabled", "active", "href"]);
  let { class: className = "" } = $$props;
  let { disabled = false } = $$props;
  let { active = false } = $$props;
  let { href = "#" } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  classes = classnames(className, "nav-link", { disabled, active });
  return `<a${spread(
    [
      escape_object($$restProps),
      { href: escape_attribute_value(href) },
      { class: escape_attribute_value(classes) }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</a>`;
});
const NavbarBrand = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classes;
  let $$restProps = compute_rest_props($$props, ["class", "href"]);
  let { class: className = "" } = $$props;
  let { href = "/" } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  classes = classnames(className, "navbar-brand");
  return `<a${spread(
    [
      escape_object($$restProps),
      { class: escape_attribute_value(classes) },
      { href: escape_attribute_value(href) }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</a>`;
});
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let currentConfiguration;
  let $activeLaws, $$unsubscribe_activeLaws;
  let $mortgage, $$unsubscribe_mortgage;
  let $house, $$unsubscribe_house;
  let $user, $$unsubscribe_user;
  let $page, $$unsubscribe_page;
  $$unsubscribe_activeLaws = subscribe(activeLaws, (value) => $activeLaws = value);
  $$unsubscribe_mortgage = subscribe(mortgage, (value) => $mortgage = value);
  $$unsubscribe_house = subscribe(house, (value) => $house = value);
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  currentConfiguration = "?" + generateCurrentConfigurationURLParams($user, $house, $mortgage, $activeLaws);
  $$unsubscribe_activeLaws();
  $$unsubscribe_mortgage();
  $$unsubscribe_house();
  $$unsubscribe_user();
  $$unsubscribe_page();
  return `<header class="p-3 mb-3 border-bottom">${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">${validate_component(NavbarBrand, "NavbarBrand").$$render($$result, { href: "/" + currentConfiguration }, {}, {
        default: () => {
          return `Home`;
        }
      })}

			${validate_component(Nav, "Nav").$$render(
        $$result,
        {
          class: "col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0"
        },
        {},
        {
          default: () => {
            return `${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(NavLink, "NavLink").$$render(
                  $$result,
                  {
                    class: "px-2 link-secondary",
                    active: $page.url.pathname === "/piano-di-ammortamento",
                    href: "/piano-di-ammortamento" + currentConfiguration
                  },
                  {},
                  {
                    default: () => {
                      return `Piano di Ammortamento
					`;
                    }
                  }
                )}`;
              }
            })}
				${validate_component(NavItem, "NavItem").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(NavLink, "NavLink").$$render(
                  $$result,
                  {
                    class: "px-2 link-secondary",
                    active: $page.url.pathname === "/about",
                    href: "/about" + currentConfiguration
                  },
                  {},
                  {
                    default: () => {
                      return `About
					`;
                    }
                  }
                )}`;
              }
            })}`;
          }
        }
      )}</div>`;
    }
  })}</header>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})}

${validate_component(Container, "Container").$$render($$result, { fluid: true }, {}, {
    default: () => {
      return `<main class="col-md-8 offset-md-2">${slots.default ? slots.default({}) : ``}</main>`;
    }
  })}

<footer></footer>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-23df863f.js.map
