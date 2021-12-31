<script lang="ts">
	import { PERIOD_TYPE } from '$lib/enums';
	import { house } from '$lib/stores/house';
	import { mortgage } from '$lib/stores/mortgage';
	import { Col, FormGroup, Input, Label } from 'sveltestrap';

	$: mortgageTotalIsValid = $mortgage.total >= 2 && $house.totalPrice >= $mortgage.total;
</script>

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
