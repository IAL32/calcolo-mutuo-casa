<script lang="ts">
	import { user } from '$lib/stores/user';

	import { Col, Input, Label, Row } from '@sveltestrap/sveltestrap';
	$: ageIsValid = $user.age >= 18;
</script>

<Row class="mb-2">
	<Label class="col-sm-4" for="user-age">Età acquirente</Label>
	<Col sm="6">
		<Input
			id="user-age"
			type="number"
			valid={ageIsValid}
			invalid={!ageIsValid}
			bind:value={$user.age}
			placeholder="Inserisci la tua età"
			feedback={!ageIsValid
				? ['Devi essere almeno maggiorenne per poter acquistare una casa']
				: null} />
	</Col>
</Row>
