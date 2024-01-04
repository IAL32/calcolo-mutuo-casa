import { c as create_ssr_component, v as validate_component, f as subscribe, j as each, g as escape } from './index2-613b03a1.js';
import { b as calculateMortgagePlan } from './finance-f08a3ec3.js';
import { m as mortgage, t as toPrettyEuro } from './mortgage-e00d7466.js';
import { T as Table } from './Table-f97d7155.js';
import './index-d5733251.js';
import './Offcanvas.svelte_svelte_type_style_lang-c11e389a.js';

const css = {
  code: "thead.svelte-cr8fga{top:0;z-index:1}",
  map: null
};
const Mortgage_plan_table = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $mortgage, $$unsubscribe_mortgage;
  $$unsubscribe_mortgage = subscribe(mortgage, (value) => $mortgage = value);
  $$result.css.add(css);
  $$unsubscribe_mortgage();
  return `${validate_component(Table, "Table").$$render($$result, { hover: true }, {}, {
    default: () => {
      return `<thead class="position-sticky bg-light svelte-cr8fga"><tr><th style="width: 10%">Periodo</th>
				<th>Muto pagato</th>
				<th>Interesse pagato</th>
				<th>Totale pagato</th>
				<th>Mutuo restante</th></tr></thead>
		<tbody>${each(calculateMortgagePlan($mortgage), (mortgagePlan, period) => {
        return `<tr><td>${escape(period + 1)}</td>
					<td>${escape(toPrettyEuro(mortgagePlan.principalPaid))}</td>
					<td>${escape(toPrettyEuro(mortgagePlan.interestPaid))}</td>
					<td>${escape(toPrettyEuro(mortgagePlan.mortgagePaid))}</td>
					<td>${escape(toPrettyEuro(mortgagePlan.remainingPrincipal))}</td>
				</tr>`;
      })}</tbody>`;
    }
  })}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Mortgage_plan_table, "MortgagePlanTable").$$render($$result, {}, {}, {})}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-f0aab0c4.js.map
