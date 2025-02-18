<script lang="ts">
	/* Components */
	import MajesticonsMenu from '$components/ui/icons/MajesticonsMenu.svelte';
	import MajesticonsClose from '$components/ui/icons/MajesticonsClose.svelte';

	/* Data */
	import { menu } from '$data/menu.data';

    /* Variables */
    let menuOpen = false;
</script>

<header class="Header">
	<button class="openCloseMenuBtn" id="openMenuBtn" on:click={() => menuOpen = true}>
		<MajesticonsMenu classes="size-12 text-primary" />
	</button>
	<nav id="menu" class={menuOpen ? "right-0" : "right-[-100%]"}>
		<div>
			<button class="openCloseMenuBtn" id="closeMenuBtn" on:click={() => menuOpen = false}>
				<MajesticonsClose classes="size-12" />
			</button>
		</div>
		<ul>
			{#each menu as item}
				<li>
					<a href={item.url} on:click={() => menuOpen = false}>{item.title}</a>
				</li>
			{/each}
		</ul>
	</nav>
</header>

<style>
	.Header {
		@apply fixed left-0 right-0 top-0 z-50 w-full bg-background p-2 text-right lg:border-b lg:border-primary/50;
	}

	.Header button {
		@apply lg:hidden lg:opacity-0 lg:collapse;
	}

	.Header > nav {
		@apply w-full bg-background p-2 text-primary max-lg:fixed max-lg:bottom-0 max-lg:top-0 max-lg:h-screen;
	}

	.Header > nav > div {
		@apply w-full text-right;
	}

	.Header > nav > ul {
		@apply flex h-[90%] flex-col items-center justify-center gap-y-8 text-lg lg:flex-row lg:gap-6;
	}

	.Header > nav > ul > li {
		@apply text-3xl lg:text-lg xl:text-xl;
	}
</style>
