<script context="module" lang="ts">
  import { LoadBookmarkletError } from '$lib/errors';
  import resolve from '$lib/resolve';

  export async function load({ fetch, params }) {
    const file: string = params.file;

    let bookmarklet;
    try {
      bookmarklet = await fetch(resolve(`/bookmarklet/${file}.json`))
        .then(res => (res.ok ? res.json() : Promise.reject(new LoadBookmarkletError())))
        .then(({ bookmarklet }) => bookmarklet);
    } catch (error) {
      console.error(error);
      return {
        status: 500,
        error,
      };
    }

    const repoUrl =
      'https://github.com/sea-grass/bookmarklet-repository/blob/main/bookmarklets/' + file + '.js';

    return {
      props: {
        bookmarklet,
        repoUrl,
      },
    };
  }
</script>

<script lang="ts">
  import Link from '$lib/Link.svelte';

  export let bookmarklet;
  export let repoUrl: string;
</script>

<h2>{bookmarklet.name}</h2>
<p>
  <i><Link href={repoUrl} target="_blank">View on GitHub</Link></i>
</p>
<p>
  Drag this link to your bookmarks bar: <Link href={bookmarklet.url}>{bookmarklet.name}</Link>
</p>
{@html bookmarklet.pre}
