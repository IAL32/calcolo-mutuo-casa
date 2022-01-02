<script lang="ts">
	import { PERIOD_TYPE } from '$lib/enums';
	import { house } from '$lib/stores/house';
	import { mortgage } from '$lib/stores/mortgage';
	import { Col, FormGroup, Input, InputGroup, InputGroupText, Label, Row } from 'sveltestrap';

	$: mortgageTotalIsValid = $mortgage.total >= 2 && $house.totalPrice >= $mortgage.total;
	let mortgagePercent: number = calculateMortgagePercent($mortgage.total, $house.totalPrice);

	function calculateMortgagePercent(mortgageTotal, houseTotalPrice) {
		return parseFloat(((mortgageTotal / houseTotalPrice) * 100).toFixed(2));
	}

	function handleMortgageTotalChange(e) {
		$mortgage.total = e.target.value;
		mortgagePercent = calculateMortgagePercent($mortgage.total, $house.totalPrice);
	}

	function handleMortgagePercentChange(e) {
		mortgagePercent = e.target.value;
		$mortgage.total = parseFloat(
			($house.totalPrice * (Math.min(mortgagePercent, 100) / 100)).toFixed(2)
		);
	}
</script>

<Row>
	<Col>
		<FormGroup row>
			<Label for="mortgage-total" sm="2">Valore</Label>
			<Col sm="10">
				<InputGroup>
					<InputGroupText>&euro;</InputGroupText>
					<Input
						name="mortgage-total"
						type="number"
						valid={mortgageTotalIsValid}
						invalid={!mortgageTotalIsValid}
						on:input={handleMortgageTotalChange}
						value={$mortgage.total}
						step={1000}
						max={$house.totalPrice}
						placeholder="Inserisci il valore del mutuo da richiedere" />
				</InputGroup>
			</Col>
		</FormGroup>
	</Col>
	<Col>
		<FormGroup row>
			<Label for="mortgage-percent" sm="2">oppure</Label>
			<Col sm="10">
				<InputGroup>
					<InputGroupText>&percnt;</InputGroupText>
					<Input
						name="mortgage-percent"
						type="number"
						on:input={handleMortgagePercentChange}
						value={mortgagePercent}
						step={1}
						min={0}
						max={100}
						placeholder="Percentuale del mutuo" />
				</InputGroup>
			</Col>
		</FormGroup>
	</Col>
</Row>
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
	<Label for="mortgage-taeg" sm="2">TAEG</Label>
	<Col sm="10">
		<InputGroup>
			<InputGroupText>&percnt;</InputGroupText>
			<Input
				name="mortgage-taeg"
				type="number"
				on:input={handleMortgagePercentChange}
				bind:value={$mortgage.taeg}
				step={0.01}
				placeholder="Inserisci il valore del mutuo da richiedere" />
		</InputGroup>
	</Col>
</FormGroup>
