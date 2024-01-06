<script lang="ts">
	import { NavbarBrand, Nav, NavItem, NavLink, Container } from '@sveltestrap/sveltestrap';
</script>

<header class="p-3 mb-3 border-bottom">
	<Container>
		<div
			class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
			<NavbarBrand href="/">Home</NavbarBrand>

			<Nav class="col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
				<NavItem>
					<NavLink class="px-2 link-secondary" href="https://github.com/IAL32/calcolo-mutuo-casa">
						GitHub
					</NavLink>
				</NavItem>
			</Nav>
		</div>
	</Container>
</header>
