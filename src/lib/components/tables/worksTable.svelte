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
	import {
		limitStore,
		worksStore,
		loadingStore,
		errorStore,
		getWorks,
		totalItemsStore,
		onFirstPage,
		onPreviousPage,
		onNextPage,
		onLastPage,
		currentPageStore,
		pagesStore
	} from '$stores/WorksStore';

	/* Helpers */
	import { updateOptionsLimit } from '$lib/core/helpers/updateOptionsLimit.helper';

	let limit: number = 0;
	let loading: boolean = false;
	let works: Work[] = [];
	let error: boolean = false;
	let totalItems: number = 0;
	let optionsSelect: { value: string | number | null; label: string }[] = [];
	let currentPage: number = 1;
	let pages: number = 0;

	limitStore.subscribe((value) => (limit = value));
	loadingStore.subscribe((value) => (loading = value));
	worksStore.subscribe((value) => (works = value));
	errorStore.subscribe((value) => (error = value));
	currentPageStore.subscribe((value) => (currentPage = value));
	pagesStore.subscribe((value) => (pages = value));
	totalItemsStore.subscribe((value) => {
		totalItems = value;
		optionsSelect = updateOptionsLimit(totalItems);
	});

	const colums = [
		'Title',
		'Url',
		'UrlRepo',
		'ServiceRepo',
		'PublicRepo',
		'Image',
		'Status',
		'Technologies'
	];

	getWorks();
</script>

<TableLayout
	{colums}
	limit={limitStore}
	refreshFunction={getWorks}
	{optionsSelect}
	{pages}
	{currentPage}
	{onFirstPage}
	{onPreviousPage}
	{onNextPage}
	{onLastPage}
	{totalItems}
>
	{#if loading}
		<tr> <td colspan={colums.length + 1}>Loading... </td></tr>
	{:else if error}
		<tr>
			<td colspan={colums.length + 1}>Error loading data</td>
		</tr>
	{:else}
		{#each works as work}
			<tr>
				<td class="min-w-[300px]">{work.title}</td>
				<td
					>{#if work.url}
						<MajesticonsLink />
					{/if}</td
				>
				<td class="text-center"
					>{#if work.repoUrl}
						<MajesticonsLink />
					{/if}</td
				>
				<td class="text-center"
					>{#if work.originRepo === 'Github'}
						<BlxGithub />
					{:else if work.originRepo === 'Gitlab'}
						<BlxGitlab />
					{/if}</td
				>
				<td class="text-center">{work.publicRepo}</td>
				<td class="text-center"
					>{#if work.image}
						<MajesticonsImage />
					{/if}</td
				>
				<td class="text-center">{work.status}</td>
				<td class="overflow-hidden text-wrap">{work.technologies}</td>
				<td class="rowActions">
					<MajesticonsEye />
					<MajesticonsDelete />
				</td>
			</tr>
		{/each}
	{/if}
</TableLayout>
