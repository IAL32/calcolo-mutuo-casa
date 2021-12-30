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
					<NavLink class="px-2 link-secondary" active={$page.path === '/'} href="/">
						Overview
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink class="px-2 link-secondary" active={$page.path === '/about'} href="/about">
						About
					</NavLink>
				</NavItem>
			</Nav>

			<Form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
				<Input type="search" placeholder="Search..." aria-label="Search" />
			</Form>
		</div>
	</Container>
</header>
