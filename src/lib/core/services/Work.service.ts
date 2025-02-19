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

	getAll = async (): Promise<Work[]> => {
		const { data, error } = await this.supabase
			.from(this.table)
			.select('*')
			.order('order', { ascending: false });
		if (error) throw new Error(error.message);
		const works: Promise<Work>[] = data.map(async(work) => {
			work.image = await this.service.get(this.tableBucketName, work.image)
			return work
		})
		return await Promise.all(works)
	};
}

export default WorkService;
