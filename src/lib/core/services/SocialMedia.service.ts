import { createClient } from '$supabase/supabaseClient';

/* Models */
import type { SocialMedia } from '$models/SocialMedia.interface';

class SocialMediaService {
	private supabase = createClient();
	private table = 'social_media';

	getAll = async (): Promise<SocialMedia[]> => {
		const { data, error } = await this.supabase
			.from(this.table)
			.select('*')
			.order('name')

		if (error) throw new Error(error.message);
		return data as SocialMedia[];
	};
}

export default SocialMediaService;
