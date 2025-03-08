import { writable, get } from 'svelte/store';

/* Interfaces */
import type { Result } from '$interfaces/Result.interface';

/* Models */
import type { Work } from '$models/Work.interface';

/* Services */
import WorkService from '$services/Work.service';

const createWorkStore = () => {
	const { subscribe, set, update } = writable<Result<Work>>({
		data: [],
		count: 0,
		loading: false,
		error: false,
		message: ''
	});
	const pages = writable<number>(0);
	const currentPage = writable<number>(1);
	let limit = writable<number>(10);

	const service = new WorkService();

	return {
		subscribe,
		loadWorks: async (from: number = 0, to: number = 10) => {
			set({
				data: [],
				count: 0,
				loading: true,
				error: false,
				message: ''
			});
			const { data, count, error, message } = await service.getAllSimple(from, to);
			const limitValue = get(limit)
			const totalPages = Math.ceil(count / limitValue);
			pages.set(totalPages);
			set({
				data,
				count,
				loading: false,
				error,
				message
			});
		}
	};
};

export const WorksStore = createWorkStore();
