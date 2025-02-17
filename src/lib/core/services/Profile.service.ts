import { createClient } from '$supabase/supabaseClient';

/* Models */
import type { Profile } from '../models/Profile.interface';

/* Services */
import ImagesService from './Images.service';

class ProfileService {
	private supabase = createClient();
	private imagesService = new ImagesService();
	private table = 'profile';
	private tableBucketName = 'personalData';

	get = async (): Promise<Profile> => {
		const { data, error } = await this.supabase.from(this.table).select('*').single();
		if (error) throw new Error(error.message);
		const profile = data as Profile;
		profile.image = await this.imagesService.get(this.tableBucketName, profile.image);
		return profile;
	};
}

export default ProfileService;
