import * as bkmklt from '$lib/bkmklt';

export async function get({ params }) {
	const { file } = params;
	const res = await bkmklt.get(file);

	console.log(res);

	if (res.error) {
		return {
			status: 404,
			error: res.error
		};
	}

	return {
		body: {
			...res
		}
	};
}
