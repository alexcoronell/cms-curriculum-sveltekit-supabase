import { createClient } from '$lib/supabase/supabaseClient';

export const getImageUrl = async (bucketName: string, filePath: string): Promise<string> => {
	const supabase = createClient();
	const fileName = filePath.replace(`${bucketName}/`, '');
	const { data } = await supabase.storage.from(bucketName).getPublicUrl(fileName);
	const { publicUrl } = data;
	return publicUrl;
};
