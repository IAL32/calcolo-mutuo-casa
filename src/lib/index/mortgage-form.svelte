<script lang="ts">
	import { PeriodType } from '$lib/enums';
	import { PeriodTypeHelper } from '$lib/helpers/EnumHelper';
	import { house } from '$lib/stores/house';
	import { mortgage } from '$lib/stores/mortgage';
	import {
		Col,
		FormGroup,
		FormText,
		Input,
		InputGroup,
		InputGroupText,
		Label,
		Row
	} from '@sveltestrap/sveltestrap';

	$: mortgageTotalIsValid = $mortgage.total >= 2 && $house.totalPrice >= $mortgage.total;

	$: mortgagePercent = calculateMortgagePercent($mortgage.total, $house.totalPrice);

	$: mortgageDownPayment = $house.totalPrice - $mortgage.total;

	function calculateMortgagePercent(mortgageTotal: number, houseTotalPrice: number) {
		return parseFloat(((mortgageTotal / houseTotalPrice) * 100).toFixed(2));
	}

	function handleMortgageTotalChange(e: any) {
		$mortgage.total = e.target.value;
		mortgagePercent = calculateMortgagePercent($mortgage.total, $house.totalPrice);
		mortgageDownPayment = $house.totalPrice - $mortgage.total;
	}

	function handleMortgagePercentChange(e: any) {
		mortgagePercent = e.target.value;
		$mortgage.total = parseFloat(
			($house.totalPrice * (Math.min(mortgagePercent, 100) / 100)).toFixed(2)
		);
	}

	function handleMortgageDownPaymentChange(e: any) {
		mortgageDownPayment = e.target.value;
		$mortgage.total = $house.totalPrice - mortgageDownPayment;
		mortgagePercent = calculateMortgagePercent($mortgage.total, $house.totalPrice);
	}

	function handleMortgageTimeChange(e: any) {
		if ($mortgage.period === PeriodType.YEARS) {
			$mortgage.time = Math.min(e.target.value, 30);
		} else {
			$mortgage.time = Math.min(e.target.value, 360);
		}
	}
</script>

<Row>
	<Col>
		<FormGroup row>
			<Label for="mortgage-total">Valore</Label>
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
			<Label for="mortgage-percent">percentuale</Label>
			<Col sm="8">
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
		<FormGroup row>
			<Label for="mortgage-percent">anticipo</Label>
			<Col sm="8">
				<InputGroup>
					<InputGroupText>&euro;</InputGroupText>
					<Input
						name="mortgage-downpayment"
						type="number"
						on:input={handleMortgageDownPaymentChange}
						value={mortgageDownPayment}
						step={1000}
						min={0}
						placeholder="Percentuale del mutuo" />
				</InputGroup>
			</Col>
		</FormGroup>
	</Col>
</Row>
<FormGroup row>
	<Label for="mortgage-period">Tempo</Label>
	<Col sm="5">
		<Input name="mortgage-period" type="select" bind:value={$mortgage.period}>
			<option value={PeriodType.MONTHS}>{PeriodTypeHelper.toString(PeriodType.MONTHS)}</option>
			<option value={PeriodType.YEARS}>{PeriodTypeHelper.toString(PeriodType.YEARS)}</option>
		</Input>
	</Col>
	<Col sm="5">
		<Input
			name="mortgage-time"
			type="number"
			min={1}
			max={$mortgage.period === PeriodType.YEARS ? 30 : 360}
			bind:value={$mortgage.time}
			on:input={handleMortgageTimeChange}
			placeholder="Durata del mutuo" />
	</Col>
</FormGroup>

<FormGroup row>
	<Label for="mortgage-taeg">TAEG</Label>
	<Col sm="10">
		<InputGroup>
			<InputGroupText>&percnt;</InputGroupText>
			<Input
				name="mortgage-taeg"
				type="number"
				bind:value={$mortgage.taeg}
				step={0.01}
				placeholder="Inserisci il TAEG" />
			<FormText>
				Il Tasso Annuo Effettivo Globale (TAEG) è il tasso di interesse annuo che include tutti i
				costi del mutuo, come gli interessi, le spese di istruttoria e le assicurazioni
				obbligatorie. Consulta il sito <a
					href="https://www.mutuionline.it/mutuo-migliore/miglior-mutuo.asp"
					target="_blank">Mutuionline.it</a>
				per trovare il TAEG più conveniente.
			</FormText>
		</InputGroup>
	</Col>
</FormGroup>
