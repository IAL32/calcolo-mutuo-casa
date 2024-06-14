<script lang="ts">
	import { PurposeType, SellerType } from '$lib/enums';
	import { PurposeTypeHelper, SellerTypeHelper } from '$lib/helpers/EnumHelper';
	import { house } from '$lib/stores/house';

	import {
		Col,
		FormGroup,
		Row,
		FormText,
		Input,
		InputGroup,
		InputGroupText,
		Label
	} from '@sveltestrap/sveltestrap';

	$: houseTotalPriceIsValid = $house.totalPrice >= 2;
	$: houseTotalSizeIsValid = $house.totalSize >= 1;
</script>

<Row class="mb-2">
	<Label class="col-sm-4" for="house-totalprice">Prezzo di vendita</Label>
	<Col sm="6">
		<InputGroup>
			<InputGroupText>&euro;</InputGroupText>
			<Input
				id="house-totalprice"
				type="number"
				valid={houseTotalPriceIsValid}
				invalid={!houseTotalPriceIsValid}
				bind:value={$house.totalPrice}
				step={1000}
				placeholder="Inserisci il prezzo totale della casa" />
		</InputGroup>
	</Col>
</Row>
<Row class="mb-2">
	<Label class="col-sm-4" for="house-totalsize">Dimensione</Label>
	<Col sm="6">
		<InputGroup>
			<Input
				id="house-totalsize"
				type="number"
				valid={houseTotalSizeIsValid}
				invalid={!houseTotalSizeIsValid}
				bind:value={$house.totalSize}
				placeholder="Dimensione in metri quadri della casa" />
			<InputGroupText>m<sup>2</sup></InputGroupText>
		</InputGroup>
	</Col>
</Row>
<Row class="mb-2">
	<Label class="col-sm-4" for="house-seller">Venditore</Label>
	<Col sm="6">
		<Input
			id="house-seller"
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
</Row>
<Row class="mb-2">
	<Label class="col-sm-4" for="house-seller">Agenzia Immobiliare</Label>
	<Col sm="6">
		<Input
			id="use-realtor"
			type="checkbox"
			bind:checked={$house.useRealtor}
			valid
			feedback="Stai acquistando la casa attraverso un'agenzia immobiliare?" />
	</Col>
</Row>
<Row class="mb-2">
	<Label class="col-sm-4" for="house-realtor">Percentuale Onorario Agenzia Immobiliare</Label>
	<Col sm="6">
		<InputGroup>
			<InputGroupText>%</InputGroupText>
			<Input
				id="house-realtor"
				type="number"
				bind:value={$house.realtorFee}
				valid={$house.realtorFee > 0}
				disabled={!$house.useRealtor}
				min={0} />
			<FormText>
				La percentuale dell'importo totale che l'agenzia immobiliare richiede come compenso per aver
				intermediato la compravendita. A questo si aggiunge l'IVA.
			</FormText>
		</InputGroup>
	</Col>
</Row>
<Row class="mb-2">
	<Label class="col-sm-4" for="house-seller">Broker</Label>
	<Col sm="6">
		<Input
			id="use-broker"
			type="checkbox"
			bind:checked={$house.useBroker}
			valid
			feedback="Stai acquistando la casa attraverso un broker per il mutuo?" />
	</Col>
</Row>
<Row class="mb-2">
	<Label class="col-sm-4" for="house-broker">Percentuale Onorario Broker</Label>
	<Col sm="6">
		<InputGroup>
			<InputGroupText>%</InputGroupText>
			<Input
				id="house-broker"
				type="number"
				bind:value={$house.brokerFee}
				valid={$house.brokerFee > 0}
                disabled={!$house.useBroker}
				min={0} />
			<FormText>
				La percentuale dell'importo totale che il broker richiede come compenso per aver
				intermediato il mutuo. A questo si aggiunge l'IVA.
			</FormText>
		</InputGroup>
	</Col>
</Row>
<Row class="mb-2">
	<Label class="col-sm-4" for="house-purpose">Destinazione dell'immobile</Label>
	<Col sm="6">
		<Input
			id="house-purpose"
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
</Row>
<Row class="mb-2">
	<Label class="col-sm-4" for="house-yield">Rendita Catastale</Label>
	<Col sm="6">
		<InputGroup>
			<InputGroupText>&euro;</InputGroupText>
			<Input
				id="house-yield"
				type="number"
				bind:value={$house.yield}
				valid={$house.yield > 0}
				min={0} />
			<FormText>
				Il valore attribuito a tutti gli immobili in grado di produrre o generare reddito. Puoi
				trovare la rendita catastale dell'immobile presso <a
					href="https://sister.agenziaentrate.gov.it/CitizenVisure/">l'Agenzia delle Entrate</a>
			</FormText>
		</InputGroup>
	</Col>
</Row>
