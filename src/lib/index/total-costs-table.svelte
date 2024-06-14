<script lang="ts">
	import { calculateHouseSaleCosts, calculateMortgageCosts } from '$lib/finance';
	import { toPrettyEuro } from '$lib/helpers';
	import { activeLaws } from '$lib/stores/active-laws';
	import { house } from '$lib/stores/house';
	import { mortgage } from '$lib/stores/mortgage';
	import { Col, Row, Table } from '@sveltestrap/sveltestrap';

	$: saleCosts = calculateHouseSaleCosts($activeLaws, $house);
	$: mortgageCosts = calculateMortgageCosts($activeLaws, $house, $mortgage);

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
				<tr>
					<td colspan="2">
						<p>
							Il totale è calcolato sommando i costi legati alla compravendita, i costi legati al
							mutuo e l'anticipo per la casa. Si riferisce ad una stima dei costi totali che dovrai
							affrontare per acquistare la casa, comprensivi di tasse e spese accessorie.
						</p>
					</td>
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
