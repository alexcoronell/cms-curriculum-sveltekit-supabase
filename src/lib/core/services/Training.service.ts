import { createClient } from '$supabase/supabaseClient';

/* Services */
import ImagesService from './Images.service';

/* Models */
import type { Training } from '$models/Training.interface';

class TrainingService {
	private supabase = createClient();
	private table = 'trainings';
    private tableBucketName = "trainings";
	private service = new ImagesService();

	getAll = async (): Promise<Training[]> => {
		const { data, error } = await this.supabase
			.from(this.table)
			.select('*')
			.order('year', { ascending: false })
			.order('month', { ascending: false });
		if (error) throw new Error(error.message);
        const trainings: Promise<Training>[] = data.map(async(training) => {
            training.image = await this.service.get(this.tableBucketName, training.image)
            return training
        })
		return (await Promise.all(trainings)) as Training[];
	};
}

export default TrainingService;
