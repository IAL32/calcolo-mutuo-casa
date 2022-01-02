<script lang="ts">
	import {
		NavbarBrand,
		Nav,
		NavItem,
		NavLink,
		Container,
		Form,
		Input
	} from 'sveltestrap';
	import { page } from '$app/stores';
</script>

<header class="p-3 mb-3 border-bottom">
	<Container>
		<div
			class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
			<NavbarBrand>Home</NavbarBrand>

			<Nav class="col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
				<NavItem>
					<NavLink class="px-2 link-secondary" active={$page.path === '/piano-di-ammortamento'} href="/piano-di-ammortamento">
						Piano di Ammortamento
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink class="px-2 link-secondary" active={$page.path === '/about'} href="/about">
						About
					</NavLink>
				</NavItem>
			</Nav>
		</div>
	</Container>
</header>
