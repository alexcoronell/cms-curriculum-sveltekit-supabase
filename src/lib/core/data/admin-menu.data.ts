import type { Menu } from '$interfaces/Menu';

const baseUrl = '/admin';

export const adminMenu: Menu[] = [
	{
		title: 'Profile',
		url: `${baseUrl}/profile`
	},
    {
		title: 'Portfolio',
		url: `${baseUrl}/portfolio`
	},
	{
		title: 'Studies',
		url: `${baseUrl}/studies`
	},
	{
		title: 'Training',
		url: `${baseUrl}/trainings`
	},
	{
		title: 'Institutes',
		url: `${baseUrl}/institutes`
	},
	{
		title: 'Experiences',
		url: `${baseUrl}/experiences`
	},
	{
		title: 'Social Media',
		url: `${baseUrl}/social-media`
	},
	{
		title: 'User Data',
		url: `${baseUrl}/user-data`
	},
	{
		title: 'Pages',
		url: `${baseUrl}/pages`
	}
];
