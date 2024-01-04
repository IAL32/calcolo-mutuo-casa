import { c as create_ssr_component, v as validate_component } from './index2-613b03a1.js';
import { R as Row, C as Col } from './Row-aa0fc97c.js';
import './Offcanvas.svelte_svelte_type_style_lang-c11e389a.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1ine71f_START -->${$$result.title = `<title>About</title>`, ""}<!-- HEAD_svelte-1ine71f_END -->`, ""}

${validate_component(Row, "Row").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Col, "Col").$$render($$result, { class: "text-center" }, {}, {
        default: () => {
          return `Ciao! Questo sito è stato originariamente sviluppato da <a href="https://adct.it" rel="external">Adrian Castro</a>, ed il codice sorgente può essere visionato su
		<a href="https://github.com/IAL32/calcolo-mutuo-casa" rel="external">GitHub</a>.
	`;
        }
      })}`;
    }
  })}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-cc7b57a4.js.map
