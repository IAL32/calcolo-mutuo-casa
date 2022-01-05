<script lang="ts">
	import { PurposeType, SellerType } from '$lib/enums';
	import { PurposeTypeHelper, SellerTypeHelper } from '$lib/helpers/EnumHelper';
	import { house } from '$lib/stores/house';

	import { Col, FormGroup, FormText, Input, InputGroup, InputGroupText, Label } from 'sveltestrap';

	$: houseTotalPriceIsValid = $house.totalPrice >= 2;
	$: houseTotalSizeIsValid = $house.totalSize >= 1;
</script>

<FormGroup row>
	<Label for="house-totalprice" sm="2">Prezzo di vendita</Label>
	<Col sm="10">
		<InputGroup>
			<InputGroupText>&euro;</InputGroupText>
			<Input
				name="house-totalprice"
				type="number"
				valid={houseTotalPriceIsValid}
				invalid={!houseTotalPriceIsValid}
				bind:value={$house.totalPrice}
				step={1000}
				placeholder="Inserisci il prezzo totale della casa" />
		</InputGroup>
	</Col>
</FormGroup>
<FormGroup row>
	<Label for="house-totalsize" sm="2">Dimensione</Label>
	<Col sm="10">
		<InputGroup>
			<Input
				name="house-totalsize"
				type="number"
				valid={houseTotalSizeIsValid}
				invalid={!houseTotalSizeIsValid}
				bind:value={$house.totalSize}
				placeholder="Dimensione in metri quadri della casa" />
			<InputGroupText>m<sup>2</sup></InputGroupText>
		</InputGroup>
	</Col>
</FormGroup>
<FormGroup row>
	<Label for="house-seller" sm="2">Venditore</Label>
	<Col sm="10">
		<Input
			name="house-seller"
			type="select"
			bind:value={$house.seller}
			valid
			feedback="Stai acquistando la tua casa da un privato o da un'azienda, come il costruttore?">
			<option value={SellerType.PRIVATE}>
				{SellerTypeHelper.toString(SellerType.PRIVATE)}
			</option>
			<option value={SellerType.COMPANY}>
				{SellerTypeHelper.toString(SellerType.COMPANY)}
			</option>
		</Input>
	</Col>
</FormGroup>
<FormGroup row>
	<Label for="house-purpose" sm="2">Destinazione dell'immobile</Label>
	<Col sm="10">
		<Input
			name="house-purpose"
			type="select"
			bind:value={$house.purpose}
			valid
			feedback="È la tua prima casa?">
			<option value={PurposeType.FIRST_HOUSE}>
				{PurposeTypeHelper.toString(PurposeType.FIRST_HOUSE)}
			</option>
			<option value={PurposeType.SECOND_HOUSE}>
				{PurposeTypeHelper.toString(PurposeType.SECOND_HOUSE)}
			</option>
		</Input>
	</Col>
</FormGroup>
<FormGroup row>
	<Label for="house-yield" sm="2">Rendita Catastale</Label>
	<Col sm="10">
		<InputGroup>
			<InputGroupText>&euro;</InputGroupText>
			<Input name="house-yield" type="number" bind:value={$house.yield} valid={$house.yield > 0} min={0} />
			<FormText color="muted">
				Il valore attribuito a tutti gli immobili in grado di produrre o generare reddito. Puoi
				trovare la rendita catastale dell'immobile presso <a
					href="https://sister.agenziaentrate.gov.it/CitizenVisure/">l'Agenzia delle Entrate</a>
			</FormText>
		</InputGroup>
	</Col>
</FormGroup>
