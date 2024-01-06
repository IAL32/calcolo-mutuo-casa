<script lang="ts">
	import { Col, Row } from '@sveltestrap/sveltestrap';

	import HouseForm from '$lib/index/house-form.svelte';
	import MortgageForm from '$lib/index/mortgage-form.svelte';
	import UserForm from '$lib/index/user-form.svelte';
	import SaleCostsTable from '$lib/index/sale-costs-table.svelte';
	import MortgageCostsTable from '$lib/index/mortgage-costs-table.svelte';
	import ActiveLawsForm from '$lib/index/active-laws-form.svelte';
	import TotalCostsTable from '$lib/index/total-costs-table.svelte';
	import { mortgage } from '$lib/stores/mortgage';
	import { calculateMortgage, calculateMortgageTotal } from '$lib/finance';
	import MortgagePlanTable from '$lib/index/mortgage-plan-table.svelte';
	import { toPrettyEuro } from '$lib/helpers';
</script>

<svelte:head>
	<title>Calcolo Rata Mutuo</title>
</svelte:head>

<h1>Calcolo Mutuo</h1>

<hr />

<Row>
	<Col sm="12" lg="6">
		<h3>Casa</h3>
		<UserForm />
		<HouseForm />
	</Col>
	<Col sm="12" lg="6">
		<h3>Mutuo</h3>
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

<hr />

<h2>Piano di Ammortamento</h2>

<MortgagePlanTable />

<!-- Footer with some margins -->

<Row class="m-5">
	<Col class="text-center">
		Ciao! Questo sito è stato originariamente sviluppato da <a href="https://adct.it" rel="external"
			>Adrian Castro</a
		>, ed il codice sorgente può essere visionato su
		<a href="https://github.com/IAL32/calcolo-mutuo-casa" rel="external">GitHub</a>.
	</Col>
</Row>
