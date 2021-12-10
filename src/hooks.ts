import { minify } from 'html-minifier';

export async function handle({ request, resolve }) {
	const response = await resolve(request);

	if (response.headers['content-type'] === 'text/html') {
		const body = minify(response.body, {
			collapseWhitespace: true,
			collapseBooleanAttributes: true,
			removeRedundantAttributes: true,
			useShortDoctype: true,
			removeComments: true
		});
		return {
			...response,
			body
		};
	}

	return response;
}
