<script lang="ts">
	import { calculateMortgagePlan } from '$lib/finance';
	import { toPrettyEuro } from '$lib/helpers';
	import { mortgage } from '$lib/stores/mortgage';
	import { Table } from '@sveltestrap/sveltestrap';
</script>

<div>
	<Table hover class="mortgage-table">
		<thead class="position-sticky bg-light">
			<tr>
				<th style="width: 10%">Periodo</th>
				<th>Muto pagato</th>
				<th>Interesse pagato</th>
				<th>Totale pagato</th>
				<th>Mutuo restante</th>
			</tr>
		</thead>
		<tbody>
			{#each calculateMortgagePlan($mortgage) as mortgagePlan, period}
				<tr>
					<td>{period + 1}</td>
					<td>{toPrettyEuro(mortgagePlan.principalPaid)}</td>
					<td>{toPrettyEuro(mortgagePlan.interestPaid)}</td>
					<td>{toPrettyEuro(mortgagePlan.mortgagePaid)}</td>
					<td>{toPrettyEuro(mortgagePlan.remainingPrincipal)}</td>
				</tr>
			{/each}
		</tbody>
	</Table>
</div>

<style>
	thead {
		top: 0;
		z-index: 1;
	}
	div {
		max-height: clamp(50em, 10vh, 250px);
		overflow: auto;
	}
</style>
