import { createClient } from '$supabase/supabaseClient';

/* Models */
import type { Study } from '$models/Study.interface';

class StudyService {
	private supabase = createClient();
	private table = 'studies';

	getAll = async (): Promise<Study[]> => {
		const { data, error } = await this.supabase
			.from(this.table)
			.select('*')
			.order('current', { ascending: false })
			.order('until', { ascending: false })
			.order('since', { ascending: false });
		if (error) throw new Error(error.message);
		return data as Study[];
	};
}

export default StudyService;
