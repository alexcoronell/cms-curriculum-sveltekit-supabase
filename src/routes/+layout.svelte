<script lang="ts">
	/* Components */
	import Header from '$components/shared/Header.svelte';
	import Footer from '$components/shared/Footer.svelte';
	import '../app.css';
	let { children } = $props();
</script>

<Header />
{@render children()}
<Footer />