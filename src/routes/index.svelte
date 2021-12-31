<script lang="ts">
	import { Button, ButtonGroup, ButtonToolbar, Col, Row } from 'sveltestrap';

	import HouseForm from '$lib/index/house-form.svelte';
	import MortgageForm from '$lib/index/mortgage-form.svelte';
	import MortgagePlanTable from '$lib/index/mortgage-plan-table.svelte';
	import UserForm from '$lib/index/user-form.svelte';
	import { mortgage } from '$lib/stores/mortgage';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<div
	class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
	<h1>Calcolo Mutuo</h1>
	<ButtonToolbar class="mb-2 mb-md-0">
		<ButtonGroup class="me-2">
			<Button size="sm" outline color="secondary">Share</Button>
			<Button size="sm" outline color="secondary">Export</Button>
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
		<h3>Mutuo</h3>

		<MortgageForm />
	</Col>
</Row>

<h2>Piano di ammortamento</h2>

<MortgagePlanTable />
