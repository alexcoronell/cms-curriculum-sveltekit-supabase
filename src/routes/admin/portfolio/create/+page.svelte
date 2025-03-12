<script lang="ts">
	import AdminPagesLayout from '$components/layouts/AdminPagesLayout.svelte';
    import WorkForm from '$components/forms/WorkForm.svelte';
</script>

<AdminPagesLayout title="Portfolio Admin">
	<div class="PortfolioAdminCreate">
		<WorkForm />
	</div>
</AdminPagesLayout>