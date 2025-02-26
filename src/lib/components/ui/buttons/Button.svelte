<script lang="ts">
	export let classes: string = '';
	export let type: 'button' | 'submit' | 'reset' | null | undefined = 'button';
	export let variant: 'primary' | 'secondary' | 'light' = 'primary';
	export let disabled: boolean = false;
	const classesToUse = `btn btn--${variant} ${classes}`.trim();
</script>

<button {type} class={classesToUse} {disabled} on:click on:submit on:reset>
	<slot />
</button>

<style>
	.btn {
		@apply rounded-xl p-3 hover:shadow-md focus:outline-none;
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
