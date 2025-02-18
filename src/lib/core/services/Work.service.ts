import { createClient } from '$supabase/supabaseClient';

/* Models */
import type { Work } from '$models/Work.interface';

class WorkService {
	private supabase = createClient();
	private table = 'works';

	getAll = async (): Promise<Work[]> => {
		const { data, error } = await this.supabase
			.from(this.table)
			.select('*')
			.order('order', { ascending: false });
		if (error) throw new Error(error.message);
		return data as Work[];
	};
}

export default WorkService;
