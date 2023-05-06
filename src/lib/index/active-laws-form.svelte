<script lang="ts">
	import { activeLaws } from '$lib/stores/active-laws';

	import { FormGroup, Input } from 'sveltestrap';
</script>

<FormGroup>
	<Input
		name="mortgage-total"
		type="checkbox"
		bind:checked={$activeLaws.dl_73_2021}
		label="DL 73/2021, art. 64" />
</FormGroup>
