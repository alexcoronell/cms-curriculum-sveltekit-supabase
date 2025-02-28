import { createClient } from '$supabase/supabaseClient';

/* Services */
import ImagesService from './Images.service';

/* Models */
import type { Work } from '$models/Work.interface';

class WorkService {
	private supabase = createClient();
	private table = 'works';
	private tableBucketName = "works";
	private service = new ImagesService();

	getAll = async (from = 0, to = 100000): Promise<{ works: Work[], count: number }> => {
		const { data, count, error } = await this.supabase
			.from(this.table)
			.select('*', { count: 'exact' })
			.order('order', { ascending: false })
			.range(from, to)
		if (error) throw new Error(error.message);
		const works: Promise<Work>[] = data.map(async(work) => {
			work.image = await this.service.get(this.tableBucketName, work.image)
			return work
		})
		const dataWorks: Work[] = await Promise.all(works)
		return { works: dataWorks, count: count as number }
	};
}

export default WorkService;
