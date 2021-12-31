<script lang="ts">
import { user } from '$lib/stores/user';

	import { Col, FormGroup, Input, Label } from 'sveltestrap';
	$: ageIsValid = $user.age >= 18;
</script>

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
