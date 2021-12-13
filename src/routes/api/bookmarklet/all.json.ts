import * as bkmklt from '$lib/bkmklt';

export async function get() {
  const res = await bkmklt.getAll();

  if (res instanceof Error) {
    return {
      status: 404,
      error: res.message,
    };
  }

  return {
    body: {
      paths: res.paths,
    },
  };
}
