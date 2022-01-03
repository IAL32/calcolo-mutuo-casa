<script lang="ts">
	import { NavbarBrand, Nav, NavItem, NavLink, Container } from 'sveltestrap';
	import { page } from '$app/stores';
	import { generateCurrentConfigurationURLParams } from '$lib/helpers';
	import { user } from '$lib/stores/user';
	import { house } from '$lib/stores/house';
	import { mortgage } from '$lib/stores/mortgage';
	import { activeLaws } from '$lib/stores/active-laws';

	$: currentConfiguration =
		'?' + generateCurrentConfigurationURLParams($user, $house, $mortgage, $activeLaws);
</script>

<header class="p-3 mb-3 border-bottom">
	<Container>
		<div
			class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
			<NavbarBrand href={"./" + currentConfiguration}>Home</NavbarBrand>

			<Nav class="col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
				<NavItem>
					<NavLink
						class="px-2 link-secondary"
						active={$page.url.pathname === '/piano-di-ammortamento'}
						href={"./piano-di-ammortamento" + currentConfiguration}>
						Piano di Ammortamento
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink class="px-2 link-secondary" active={$page.url.pathname === '/about'} href="./about">
						About
					</NavLink>
				</NavItem>
			</Nav>
		</div>
	</Container>
</header>
