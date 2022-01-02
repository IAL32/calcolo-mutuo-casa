<script lang="ts">
	import { PURPOSE_TYPE, SELLER_TYPE } from '$lib/enums';
	import { house } from '$lib/stores/house';

	import { Col, FormGroup, Input, InputGroup, InputGroupText, Label } from 'sveltestrap';

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
<FormGroup row>
	<Label for="house-yield" sm="2">Rendita Catastale</Label>
	<Col sm="10">
		<InputGroup>
			<InputGroupText>&euro;</InputGroupText>
			<Input name="house-yield" type="number" bind:value={$house.yield} />
		</InputGroup>
	</Col>
</FormGroup>
