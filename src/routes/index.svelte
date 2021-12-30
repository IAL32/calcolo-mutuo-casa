<script lang="ts">
	import { PERIOD_TYPE, PURPOSE_TYPE, SELLER_TYPE } from '$lib/enums';
	import { calculate_interest_paid_amount, calculate_mortgage, calculate_principal_paid_amount } from '$lib/finance';
	import { house } from '$lib/stores/house';
	import { mortgage } from '$lib/stores/mortgage';
	import { user } from '$lib/stores/user';
	import {
		Button,
		ButtonGroup,
		ButtonToolbar,
		Col,
		Form,
		FormGroup,
		Input,
		Label,
		Row,
		Table
	} from 'sveltestrap';

	$: ageIsValid = $user.age >= 18;
	$: houseTotalPriceIsValid = $house.totalPrice >= 2;
	$: mortgageTotalIsValid = $mortgage.total >= 2 && $house.totalPrice >= $mortgage.total;
	$: houseTotalSizeIsValid = $house.totalSize >= 1;
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
		<FormGroup row>
			<Label for="user-age" sm="2">Età acquirente</Label>
			<Col sm="10">
				<Input
					name="user-age"
					type="number"
					valid={ageIsValid}
					invalid={!ageIsValid}
					bind:value={$user.age}
					placeholder="Inserisci la tua età"
					feedback={!ageIsValid
						? ['Devi essere almeno maggiorenne per poter acquistare una casa']
						: null} />
			</Col>
		</FormGroup>
		<FormGroup row>
			<Label for="house-totalprice" sm="2">Prezzo di vendita</Label>
			<Col sm="10">
				<Input
					name="house-totalprice"
					type="number"
					valid={houseTotalPriceIsValid}
					invalid={!houseTotalPriceIsValid}
					bind:value={$house.totalPrice}
					step={1000}
					placeholder="Inserisci il prezzo totale della casa" />
			</Col>
		</FormGroup>
		<FormGroup row>
			<Label for="house-totalsize" sm="2">Dimensione</Label>
			<Col sm="10">
				<Input
					name="house-totalsize"
					type="number"
					valid={houseTotalSizeIsValid}
					invalid={!houseTotalSizeIsValid}
					bind:value={$house.totalSize}
					placeholder="Dimensione in metri quadri della casa" />
			</Col>
		</FormGroup>
		<FormGroup row>
			<Label for="house-seller" sm="2">Venditore</Label>
			<Col sm="10">
				<Input name="house-seller" type="select" bind:value={$house.seller}>
					<option value={SELLER_TYPE.PRIVATE}>Privato</option>
					<option value={SELLER_TYPE.COMPANY}>Azienda</option>
				</Input>
			</Col>
		</FormGroup>
		<FormGroup row>
			<Label for="house-purpose" sm="2">Destinazione dell'immobile</Label>
			<Col sm="10">
				<Input name="house-purpose" type="select" bind:value={$house.purpose}>
					<option value={PURPOSE_TYPE.FIRST_HOUSE}>Prima casa</option>
					<option value={PURPOSE_TYPE.SECOND_HOUSE}>Seconda casa</option>
				</Input>
			</Col>
		</FormGroup>

		{JSON.stringify($user)} <br />
		{JSON.stringify($house)}
	</Col>
	<Col sm="12" lg="6">
		<h3>Mutuo</h3>

		<FormGroup row>
			<Label for="mortgage-total" sm="2">Valore</Label>
			<Col sm="10">
				<Input
					name="mortgage-total"
					type="number"
					valid={mortgageTotalIsValid}
					invalid={!mortgageTotalIsValid}
					bind:value={$mortgage.total}
					step={1000}
					placeholder="Inserisci il valore del mutuo da richiedere" />
			</Col>
		</FormGroup>

		<FormGroup row>
			<Label for="mortgage-period" sm="2">Tempo</Label>
			<Col sm="5">
				<Input name="mortgage-period" type="select" bind:value={$mortgage.period}>
					<option value={PERIOD_TYPE.MONTHS}>Mesi</option>
					<option value={PERIOD_TYPE.YEARS}>Anni</option>
				</Input>
			</Col>
			<Col sm="5">
				<Input
					name="mortgage-time"
					type="number"
					min={1}
					bind:value={$mortgage.time}
					placeholder="Durata del mutuo" />
			</Col>
		</FormGroup>

		<FormGroup row>
			<Label for="mortgage-taeg" sm="2">TAEG (%)</Label>
			<Col sm="10">
				<Input
					name="mortgage-taeg"
					type="number"
					bind:value={$mortgage.taeg}
					step={0.01}
					placeholder="Inserisci il valore del mutuo da richiedere" />
			</Col>
		</FormGroup>
		{JSON.stringify($mortgage)}
	</Col>
</Row>

<h2>Piano di ammortizzamento</h2>

<Table>
	<thead>
		<tr>
			<th style="width: 10%">Periodo</th>
			<th style="width: 45%">Muto pagato</th>
			<th style="width: 45%">Interesse pagato</th>
		</tr>
	</thead>
	<tbody>
		{#each Array($mortgage.time * ($mortgage.period === PERIOD_TYPE.YEARS ? 12 : 1)) as _, period}
			<tr>
				<th>{period + 1}</th>
				<th>{calculate_principal_paid_amount($mortgage, period + 1).toFixed(2)}</th>
				<th>{calculate_interest_paid_amount($mortgage, period + 1).toFixed(2)}</th>
				<th>{$mortgage.total - calculate_principal_paid_amount($mortgage, period + 1) * (period + 1)}</th>
			</tr>
		{/each}
	</tbody>
</Table>
