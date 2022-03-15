import * as bkmklt from '$lib/bkmklt';

export async function get({ params }) {
  const file: string = params.file;
  const bookmarklet = await bkmklt.get(file);
  return {
    body: {
      bookmarklet,
    },
  };
}
