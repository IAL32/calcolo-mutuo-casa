<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import { Container } from 'sveltestrap';
	import '../app.css';
</script>

<Header />

<Container fluid>
	<main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
		<slot />
	</main>
</Container>

<footer>
	<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
</footer>
