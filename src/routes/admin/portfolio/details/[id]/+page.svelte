<script lang="ts">
	import { page } from '$app/stores';
	import AdminPagesLayout from '$components/layouts/AdminPagesLayout.svelte';
	$: id = $page.params.id;
</script>

<AdminPagesLayout title="Portfolio Admin">
	<div class="PortfolioAdminDetail">
		Detail Work {id}
	</div>
</AdminPagesLayout>