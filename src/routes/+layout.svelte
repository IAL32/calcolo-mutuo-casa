<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import { Container } from '@sveltestrap/sveltestrap';
	import '../app.css';
</script>

<Header />

<Container fluid>
	<main class="col-md-8 offset-md-2">
		<slot />
	</main>
</Container>
