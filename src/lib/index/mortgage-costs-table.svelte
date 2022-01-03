<script lang="ts">
	import { calculateMortgageCosts } from '$lib/finance';
	import { Table } from 'sveltestrap';
	import { house } from '$lib/stores/house';
	import { toPrettyEuro } from '$lib/helpers';
	import { activeLaws } from '$lib/stores/active-laws';

	$: mortgageCosts = calculateMortgageCosts($activeLaws, $house.totalPrice, $house.purpose);
</script>

<Table responsive>
	<tbody>
		<tr>
			<td>Istruttoria Pratica di Mutuo</td>
			<td>{toPrettyEuro(mortgageCosts.openingMortgage)}</td>
		</tr>
		<tr>
			<td>Perizia dell'Immobile</td>
			<td>{toPrettyEuro(mortgageCosts.houseExamination)}</td>
		</tr>
		<tr>
			<td>Imposta Sostitutiva</td>
			<td>{toPrettyEuro(mortgageCosts.alternateTax)}</td>
		</tr>
		<tr>
			<td>Onorari Notarili per Atto di Mutuo (<abbr title="Stima">*</abbr>)</td>
			<td>{toPrettyEuro(mortgageCosts.notary)}</td>
		</tr>
	</tbody>
	<tfoot class="fw-bold">
		<tr>
			<td>Totale</td>
			<td>{toPrettyEuro(mortgageCosts.total)}</td>
		</tr>
	</tfoot>
</Table>

<style>
	tr td:nth-child(2) {
		text-align: right;
	}
</style>
