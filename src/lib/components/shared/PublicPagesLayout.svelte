<script lang="ts">
	export let title: string = '';
</script>

<main class="PublicPageLayout">
	<h1 class="PublicPageLayout__title">{title}</h1>
	<section class="PublicPageLayout__content no-scrollbar">
		<slot />
	</section>
</main>

<style>
	.PublicPageLayout {
		@apply flex h-full w-full flex-col items-center gap-y-6;
	}

	.PublicPageLayout__title {
		@apply grow-0;
	}

	.PublicPageLayout__content {
		@apply h-full w-full grow scroll-ml-96 overflow-y-auto px-1 py-6 sm:px-2 md:px-4;
	}
</style>
