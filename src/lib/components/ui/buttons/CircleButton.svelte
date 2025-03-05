<script lang="ts">
	import MajesticonsPlus from '$lib/components/ui/icons/MajesticonsPlus.svelte';
	import MajesticonsReload from '$lib/components/ui/icons/MajesticonsReload.svelte';
	import MajesticconsArrowLeft from '$lib/components/ui/icons/MajesticconsArrowLeft.svelte';
	export let classes: string = '';
	export let type: 'button' | 'submit' | 'reset' | null | undefined = 'button';
	export let actionButton: 'add' | 'refresh' | 'back' = 'add';
	export let disabled: boolean = false;
	let icon = MajesticonsPlus;
	const variant = () => {
		switch (actionButton) {
			case 'add':
                icon = MajesticonsPlus;
				console.log(actionButton);
				return 'primary';
			case 'refresh':
                icon = MajesticonsReload;
				console.log(actionButton);
				return 'secondary';
			case 'back':
                icon = MajesticconsArrowLeft;
				console.log(actionButton);
				return 'light';
			default:
                icon = MajesticonsPlus;
				console.log(actionButton);
				return 'primary';
		}
	};

	const classesToUse = `btn btn--${variant()} ${classes}`.trim();
</script>

<button {type} class={classesToUse} {disabled} on:click on:submit on:reset>
	<svelte:component this={icon} />
</button>

<style>
	.btn {
		@apply rounded-full p-3 hover:shadow-md focus:outline-none;
	}

	.btn--primary {
		@apply bg-primary text-background hover:shadow-primary disabled:shadow-none;
	}

	.btn--secondary {
		@apply border border-primary bg-background text-primary hover:bg-primary hover:text-background disabled:bg-background disabled:text-primary;
	}

	.btn--light {
		@apply border border-transparent bg-transparent text-primary hover:border-primary/70 disabled:border-transparent;
	}

	.btn:disabled {
		@apply cursor-not-allowed opacity-50;
	}
</style>
