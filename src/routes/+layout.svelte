<script lang="ts">
	/* Components */
	import Header from '$lib/components/shared/Header.svelte';
	import Footer from '$lib/components/shared/Footer.svelte';
	import '../app.css';
	let { children } = $props();
</script>

<Header />
{@render children()}
<Footer />