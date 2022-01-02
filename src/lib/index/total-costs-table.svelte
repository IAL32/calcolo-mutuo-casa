<script lang="ts">
	import { calculate_house_sale_costs, calculate_mortgage_costs } from '$lib/finance';
	import { toPrettyEuro } from '$lib/helpers';
	import { activeLaws } from '$lib/stores/active-laws';
	import { house } from '$lib/stores/house';
	import { Col, Row, Table } from 'sveltestrap';

	$: saleCosts = calculate_house_sale_costs($activeLaws, $house);
	$: mortgageCosts = calculate_mortgage_costs($activeLaws, $house.totalPrice, $house.purpose);

  $: total = saleCosts.total + mortgageCosts.total;
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
