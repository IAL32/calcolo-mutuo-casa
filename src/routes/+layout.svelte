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

<footer>
	<!-- <p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p> -->
</footer>
