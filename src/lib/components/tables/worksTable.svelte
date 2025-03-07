<script lang="ts">
    import type { PageLoad } from './$types';
    /* Components */
	import TableLayout from '$components/layouts/TableLayout.svelte';

    /* Models */
    import type { Work } from '$models/Work.interface';

    /* Stores */
    import { WorksStore } from '$stores/WorksStore';

    let works: Work[] = [];
    let loading: boolean = false;
    let error: boolean = false;

    WorksStore.subscribe(({ data: loadedWorks, error: storeError, loading: isLoading }) => {
        works = loadedWorks as Work[];
        error = storeError;
        loading = isLoading;
        console.log(works);
    });

    WorksStore.loadWorks(0, 4)
</script>

<TableLayout>Works Table</TableLayout>
