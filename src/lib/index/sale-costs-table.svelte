<script lang="ts">
	import { calculate_house_sale_costs } from '$lib/finance';
	import { toPrettyEuro } from '$lib/helpers';
	import { house } from '$lib/stores/house';
	import { Table } from 'sveltestrap';

	$: saleCosts = calculate_house_sale_costs($house);
</script>

<Table responsive>
	<tbody>
		<tr>
			<td>Onorario Agenzia Immobiliare (<abbr title="Stima">*</abbr>)</td>
			<td>{toPrettyEuro(saleCosts.realtor)}</td>
		</tr>
		<tr>
			<td>Imposta di Registro</td>
			<td>{toPrettyEuro(saleCosts.registry)}</td>
		</tr>
		<tr>
			<td>Imposta Ipotecaria</td>
			<td>{toPrettyEuro(saleCosts.mortgageTax)}</td>
		</tr>
		<tr>
			<td>Imposta Catastale</td>
			<td>{toPrettyEuro(saleCosts.landRegistryTax)}</td>
		</tr>
		<tr>
			<td>IVA</td>
			<td>{toPrettyEuro(saleCosts.vat)}</td>
		</tr>
		<tr>
			<td>Onorario Notarile (<abbr title="Stima">*</abbr>)</td>
			<td>{toPrettyEuro(saleCosts.notary)}</td>
		</tr>
	</tbody>
	<tfoot>
		<tr class="fw-bold">
			<td>Totale</td>
			<td>{toPrettyEuro(saleCosts.total)}</td>
		</tr>
	</tfoot>
</Table>

<style>
  tr td:nth-child(2) {
    text-align: right;
  }
</style>
