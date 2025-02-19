import { createClient } from '$supabase/supabaseClient';

/* Models */
import type { Training } from '$models/Training.interface';

class TrainingService {
	private supabase = createClient();
	private table = 'trainings';

	getAll = async (): Promise<Training[]> => {
		const { data, error } = await this.supabase
			.from(this.table)
			.select('*')
			.order('year', { ascending: false })
			.order('month', { ascending: false });
		if (error) throw new Error(error.message);
		return data as Training[];
	};
}

export default TrainingService;
