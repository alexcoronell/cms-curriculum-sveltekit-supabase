import type { PageLoad } from './$types';

import type { Work } from '$models/Work.interface';
import WorkService from '$services/Work.service';

export const load: PageLoad = async ({ fetch }) => {
	const service = new WorkService();

	try {
		const works: Work[] = await service.getAll();
		return {works};
	} catch (error) {
		console.error(error);
		return { works: [] };
	}
};
