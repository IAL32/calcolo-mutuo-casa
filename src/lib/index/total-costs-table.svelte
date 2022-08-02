<script lang="ts">
	import { calculateHouseSaleCosts, calculateMortgageCosts } from '$lib/finance';
	import { toPrettyEuro } from '$lib/helpers';
	import { activeLaws } from '$lib/stores/active-laws';
	import { house } from '$lib/stores/house';
	import { mortgage } from '$lib/stores/mortgage';
	import { Col, Row, Table } from 'sveltestrap';

	$: saleCosts = calculateHouseSaleCosts($activeLaws, $house);
	$: mortgageCosts = calculateMortgageCosts($activeLaws, $house.totalPrice, $house.purpose);

	$: advance = $house.totalPrice - $mortgage.total;
	$: total = saleCosts.total + advance + mortgageCosts.total;
</script>

<Row>
	<Col md="6">
		<Table>
			<tbody>
				<tr>
					<td>Costi legati alla compravendita</td>
					<td>{toPrettyEuro(saleCosts.total)}</td>
				</tr>
				<tr>
					<td>Costi legati al mutuo</td>
					<td>{toPrettyEuro(mortgageCosts.total)}</td>
				</tr>
				<tr>
					<td>Anticipo per la casa</td>
					<td>{toPrettyEuro(advance)}</td>
				</tr>
			</tbody>
			<tfoot class="fw-bold">
				<tr>
					<td>Totale</td>
					<td>{toPrettyEuro(total)}</td>
				</tr>
			</tfoot>
		</Table>
	</Col>
</Row>

<style>
	tr td:nth-child(2) {
		text-align: right;
	}
</style>
