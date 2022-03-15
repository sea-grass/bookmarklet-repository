import * as bkmklt from '$lib/bkmklt';

export async function get() {
  const bookmarklets = await bkmklt.getAll();

  return {
    body: {
      bookmarklets,
    },
  };
}
