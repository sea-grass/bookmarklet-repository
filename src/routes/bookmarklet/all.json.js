import * as bkmklt from '$lib/bkmklt';

export async function get() {
	const res = await bkmklt.getAll();

	if (res.error) {
		return {
			status: 404,
			error: res.error
		};
	}

	return {
		body: {
			paths: res.paths
		}
	};
}
