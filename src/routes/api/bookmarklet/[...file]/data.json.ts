import * as bkmklt from '$lib/bkmklt';

export async function get({ params }) {
	const { file } = params;
	const res = await bkmklt.get(file);

	if (res instanceof Error) {
		return {
			status: 404,
			error: res.message
		};
	}

	return {
		body: {
			...res
		}
	};
}
