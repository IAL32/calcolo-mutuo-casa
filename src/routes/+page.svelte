<script lang="ts">
	import { Button, ButtonGroup, ButtonToolbar, Col, Row } from 'sveltestrap';

	import HouseForm from '$lib/index/house-form.svelte';
	import MortgageForm from '$lib/index/mortgage-form.svelte';
	import UserForm from '$lib/index/user-form.svelte';
	import SaleCostsTable from '$lib/index/sale-costs-table.svelte';
	import MortgageCostsTable from '$lib/index/mortgage-costs-table.svelte';
	import ActiveLawsForm from '$lib/index/active-laws-form.svelte';
	import TotalCostsTable from '$lib/index/total-costs-table.svelte';
	import { generateCurrentConfigurationURLParams, toPrettyEuro } from '$lib/helpers';
	import { user } from '$lib/stores/user';
	import { house } from '$lib/stores/house';
	import { mortgage } from '$lib/stores/mortgage';
	import { activeLaws } from '$lib/stores/active-laws';
	import { calculateMortgage, calculateMortgageTotal } from '$lib/finance';

	$: currentConfiguration =
		'?' + generateCurrentConfigurationURLParams($user, $house, $mortgage, $activeLaws);
</script>

<svelte:head>
	<title>Calcolo Rata Mutuo</title>
</svelte:head>

<div
	class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
	<h1>Calcolo Mutuo</h1>
	<ButtonToolbar class="mb-2 mb-md-0">
		<ButtonGroup class="me-2">
			<Button size="sm" outline color="secondary" href={'/' + currentConfiguration}>
				Condividi
			</Button>
			<Button
				size="sm"
				outline
				color="secondary"
				rel="external"
				href={'/generate' + currentConfiguration}>
				Salva come PDF
			</Button>
		</ButtonGroup>
	</ButtonToolbar>
</div>

<Row>
	<Col sm="12" lg="6">
		<h3>Casa</h3>
		<UserForm />
		<HouseForm />
	</Col>
	<Col sm="12" lg="6">
		<h3>
			Mutuo - <a href={'/piano-di-ammortamento' + currentConfiguration}>
				<small>(vedi piano di ammortamento)</small>
			</a>
		</h3>
		<p class="text-muted">
			Stima: {toPrettyEuro(calculateMortgage($mortgage))}/mese, interessi totali: {toPrettyEuro(
				calculateMortgageTotal($mortgage) - $mortgage.total
			)}
		</p>

		<MortgageForm />
	</Col>
</Row>

<h2>Decreti attivi</h2>

<ActiveLawsForm />

<Row>
	<Col>
		<h2>Costi legati alla compravendita</h2>

		<SaleCostsTable />
	</Col>
	<Col>
		<h2>Costi legati al mutuo</h2>

		<MortgageCostsTable />
	</Col>
</Row>

<h2>Costi totali</h2>

<TotalCostsTable />
