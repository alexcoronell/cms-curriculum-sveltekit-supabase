<script lang="ts">
	import { page } from '$app/stores';
	import AdminPagesLayout from '$components/layouts/AdminPagesLayout.svelte';
    import WorkForm from '$components/forms/WorkForm.svelte';
	$: id = $page.params.id;
</script>

<AdminPagesLayout title="Portfolio Admin">
	<div class="PortfolioAdminDetail">
		<WorkForm {id} />
	</div>
</AdminPagesLayout>