import { writable, get } from 'svelte/store';

/* Interfaces */
import type { Result } from '$interfaces/Result.interface';

/* Models */
import type { Work } from '$models/Work.interface';

/* Services */
import WorkService from '$services/Work.service';

/* Helpers */
import { getPagination } from '$lib/core/helpers/getPagination.helper';

const limitStore = writable<number>(5);
const totalItemsStore = writable<number>(0);
const currentPageStore = writable<number>(1);
const pagesStore = writable<number>(0);
const worksStore = writable<Work[]>([]);
const errorStore = writable<boolean>(false);
const loadingStore = writable<boolean>(false);
const messageStore = writable<string>('');
const service = new WorkService();

const getWorks = async () => {
	loadingStore.set(true);
	const limit = get(limitStore);
	const { from, to } = getPagination(get(currentPageStore), limit);
	if(from > get(totalItemsStore)) {
		onFirstPage();
	}
	const {
		data,
		count,
		error: serviceError,
		message: serviceMessage
	} = await service.getAllSimple(from, to);
	worksStore.set(data);
	pagesStore.set(Math.ceil(count / limit));
	errorStore.set(serviceError || false);
	loadingStore.set(false);
	messageStore.set(serviceMessage);
	totalItemsStore.set(count);
};

const onFirstPage = () => {	
	currentPageStore.set(1);
	getWorks();
};

const onPreviousPage = () => {
	currentPageStore.update((value) => value - 1);
	getWorks();
};

const onNextPage = () => {
	currentPageStore.update((value) => value + 1);
	getWorks();
};

const onLastPage = () => {
	currentPageStore.set(get(pagesStore));
	getWorks();
};


export {
	limitStore,
	currentPageStore,
	pagesStore,
	worksStore,
	errorStore,
	loadingStore,
	messageStore,
	getWorks,
	totalItemsStore,
	onFirstPage,
	onPreviousPage,
	onNextPage,
	onLastPage
};
