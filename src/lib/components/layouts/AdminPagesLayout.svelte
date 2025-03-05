<script lang="ts">
	export let title: string = '';
</script>

<main class="AdminPageLayout">
	<h2 class="AdminPageLayout__title">{title}</h2>
	<section class="AdminPageLayout__content no-scrollbar">
		<slot />
	</section>
</main>

<style>
	.AdminPageLayout {
		@apply flex h-full w-full flex-col items-center gap-y-6 px-6;
	}

	.AdminPageLayout__title {
		@apply grow-0;
	}

	.AdminPageLayout__content {
		@apply h-full w-full grow scroll-ml-96 overflow-y-auto px-1 py-6 sm:px-2 md:px-4;
	}
</style>
