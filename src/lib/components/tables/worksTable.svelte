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
		{ classes: 'text-left w-auto', title: 'Title' },
		{ classes: 'max-xl:hidden', title: 'Url' },
		{ classes: 'max-xl:hidden', title: 'UrlRepo' },
		{ classes: 'max-lg:hidden', title: 'ServiceRepo' },
		{ classes: 'max-lg:hidden', title: 'PublicRepo' },
		{ classes: 'max-lg:hidden', title: 'Image' },
		{ classes: 'max-md:hidden text-left', title: 'Status' },
		{ classes: 'max-3xl:hidden', title: 'Technologies' }
	];

	const baseRoute = '/admin/portfolio';

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
	createUrl={`${baseRoute}/create`}
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
				<!-- Title -->
				<td class="w-auto">{work.title}</td>

				<!-- Url -->
				<td class="text-center max-xl:hidden">
					<p class="center">
						{#if work.url}
							<MajesticonsLink />
						{/if}
					</p>
				</td>

				<!-- RepoUrl -->
				<td class="text-center max-xl:hidden">
					<p class="center">
						{#if work.repoUrl}
							<MajesticonsLink />
						{/if}
					</p>
				</td>

				<!-- ServiceRepo -->
				<td class="max-lg:hidden">
					<p class="center">
						{#if work.originRepo === 'Github'}
							<BlxGithub />
						{:else if work.originRepo === 'Gitlab'}
							<BlxGitlab />
						{/if}
					</p>
				</td>

				<!-- PublicRepo -->
				<td class="text-center max-lg:hidden">{work.publicRepo}</td>

				<!-- Image -->
				<td class="max-lg:hidden">
					<p class="center">
						{#if work.image}
							<MajesticonsImage />
						{/if}
					</p>
				</td>

				<!-- Status -->
				<td class="max-md:hidden">{work.status}</td>

				<!-- Technologies -->
				<td class="overflow-hidden text-wrap max-3xl:hidden">{work.technologies}</td>
				<td class="rowActions">
					<a href={`${baseRoute}/details/${work.id}`}>
						<button class="text-primary">
							<MajesticonsEye />
						</button>
					</a>
					<button class="text-red">
						<MajesticonsDelete />
					</button>
				</td>
			</tr>
		{/each}
	{/if}
</TableLayout>

<style>
	.center {
		@apply flex items-center justify-center;
	}
</style>
