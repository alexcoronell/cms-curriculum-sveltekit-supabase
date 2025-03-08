<script lang="ts">
	/* Components */
	import TableLayout from '$components/layouts/TableLayout.svelte';
	import MajesticonsLink from '$components/ui/icons/MajesticonsLink.svelte';
	import BlxGithub from '$components/ui/icons/BlxGithub.svelte';
	import BlxGitlab from '$components/ui/icons/BlxGitlab.svelte';
    import MajesticonsImage from '$components/ui/icons/MajesticonsImage.svelte';
    import MajesticonsEye from '$components/ui/icons/MajesticonsEye.svelte';
    import MajesticonsDelete from '$components/ui/icons/MajesticonsDelete.svelte';

	/* Models */
	import type { Work } from '$models/Work.interface';

	/* Stores */
	import { WorksStore } from '$stores/WorksStore';

	let works: Work[] = [];
	let loading = false;
	let error = false;

	const colums = [
		'title',
		'url',
		'urlRepo',
		'ServiceRepo',
		'PublicRepo',
		'Image',
		'Status',
		'Technologies'
	];

	WorksStore.subscribe(({ data: loadedWorks, error: storeError, loading: isLoading }) => {
		works = loadedWorks as Work[];
		error = storeError;
		loading = isLoading;
		console.log(works);
	});

	WorksStore.loadWorks(0, 4);
</script>

<TableLayout {colums}>
	{#each works as work}
		<tr>
			<td>{work.title}</td>
			<td
				>{#if work.url}
					<MajesticonsLink />
				{/if}</td
			>
			<td
				>{#if work.repoUrl}
					<MajesticonsLink />
				{/if}</td
			>
			<td
				>{#if work.originRepo === 'Github'}
					<BlxGithub />
				{:else if work.originRepo === 'Gitlab'}
					<BlxGitlab />
				{/if}</td
			>
			<td>{work.publicRepo}</td>
			<td
				>{#if work.image}
					<MajesticonsImage />
				{/if}</td
			>
			<td>{work.status}</td>
			<td>{work.technologies}</td>
            <td class="actions">
                <MajesticonsEye />
                <MajesticonsDelete />
            </td>
		</tr>
	{/each}
</TableLayout>
