import { redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = ({ locals }) => {
	if (locals.pb.authStore.isValid) {
		throw redirect(303, '/');
	}
};

export const actions: Actions = {
	login: async ({ request, locals }) => {
		const data = await request.formData();
		const email = data.get('email') as string;
		const password = data.get('password') as string;

		try {
			const response = await locals.pb.collection('users').authWithPassword(email, password);
			console.log('Response:', response);
			throw redirect(303, '/');
		} catch (err) {
			console.log('Error:', err);
			return {
				error: true,
				email: email
			};
		}
	}
};
