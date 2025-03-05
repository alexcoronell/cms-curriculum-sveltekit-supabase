import type { PageLoad } from './$types';

import type { Work } from '$models/Work.interface';
import WorkService from '$services/Work.service';

export const load: PageLoad = async ({ fetch }) => {
	const service = new WorkService();
	const { data: works, count, error, message } = await service.getAll();
	return { works, count };
};
