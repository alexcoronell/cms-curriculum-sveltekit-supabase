<script lang="ts">
	import AdminPagesLayout from '$components/layouts/AdminPagesLayout.svelte';
	import WorksTable from '$lib/components/tables/worksTable.svelte';
</script>

<AdminPagesLayout title="Portfolio Admin">
	<div class="PortfolioAdmin">
		<WorksTable />
	</div>
</AdminPagesLayout>