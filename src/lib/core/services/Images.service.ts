import { createClient } from '$supabase/supabaseClient';

class ImagesService {
	private supabase = createClient();

	get = async (bucketName: string, filePath: string): Promise<string> => {
		const fileName = filePath.replace(`${bucketName}/`, '');
		const { data } = await this.supabase.storage.from(bucketName).getPublicUrl(fileName);
		const { publicUrl } = data;
		return publicUrl;
	};
}

export default ImagesService;
