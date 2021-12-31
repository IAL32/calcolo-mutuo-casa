<script lang="ts">
	import { get_mortgage_plan } from '$lib/finance';
	import { mortgage } from '$lib/stores/mortgage';
	import { Table } from 'sveltestrap';
</script>

<div class="overflow-auto" style="max-height: 300px">
	<Table hover>
		<thead class="position-sticky bg-light" style="top: 0; z-index: 1">
			<tr>
				<th style="width: 10%">Periodo</th>
				<th>Muto pagato</th>
				<th>Interesse pagato</th>
				<th>Totale pagato</th>
				<th>Mutuo restante</th>
			</tr>
		</thead>
		<tbody>
			{#each get_mortgage_plan($mortgage) as mortgage_plan, period}
				<tr>
					<th>{period + 1}</th>
					<th>{mortgage_plan.principal_paid.toFixed(2)}</th>
					<th>{mortgage_plan.interest_paid.toFixed(2)}</th>
					<th>{mortgage_plan.mortgage_paid.toFixed(2)}</th>
					<th>{mortgage_plan.remaining_principal.toFixed(2)}</th>
				</tr>
			{/each}
		</tbody>
	</Table>
</div>
