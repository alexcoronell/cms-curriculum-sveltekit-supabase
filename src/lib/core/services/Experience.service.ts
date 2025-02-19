import { createClient } from '$supabase/supabaseClient';

/* Models */
import type { Experience } from '$models/Experience.interface';

class ExperienceService {
	private supabase = createClient();
	private table = 'experiences';

	getAll = async (): Promise<Experience[]> => {
		const { data, error } = await this.supabase
			.from(this.table)
			.select('*, functions: experience_functions(*)')
			.order('current', { ascending: false })
			.order('until', { ascending: false });
		if (error) throw new Error(error.message);
		return data as Experience[];
	};
}

export default ExperienceService;
