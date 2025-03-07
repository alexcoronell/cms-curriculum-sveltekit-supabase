import { createClient } from '$supabase/supabaseClient';

/* IBaseService Interface */
import type { IBaseService } from '$interfaces/IBaseService.interface';

/* Services */
import ImagesService from './Images.service';

/* Models */
import type { Work } from '$models/Work.interface';

class WorkService implements IBaseService<Work> {
	private supabase = createClient();
	private table = 'works';
	private tableBucketName = 'works';
	private service = new ImagesService();

	getAllSimple = async(from: number = 0, to: number = 10) => {
		try {
			const { data, count, error } = await this.supabase
				.from(this.table)
				.select('*', { count: 'exact' })
				.order('order', { ascending: false })
				.range(from, to);
			if (error) throw new Error(error.message);
			return { data: data, count: count as number, error: false, message: 'Success' };
		} catch (error) {
			console.error(error);
			return { data: [], count: 0, error: true, message: 'Something went wrong' };
		}
	}

	getAll = async () => {
		try {
			const { data, count, error } = await this.supabase
				.from(this.table)
				.select('*', { count: 'exact' })
				.order('order', { ascending: false })
			if (error) throw new Error(error.message);
			const works: Promise<Work>[] = data.map(async (work) => {
				work.image = await this.service.get(this.tableBucketName, work.image);
				return work;
			});
			const dataWorks: Work[] = await Promise.all(works);
			return { data: dataWorks, count: count as number, error: false, message: 'Success' };
		} catch (error) {
			console.error(error);
			return { data: [], count: 0, error: true, message: 'Something went wrong' };
		}
	};
}

export default WorkService;
