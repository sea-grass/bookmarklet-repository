<script context="module" lang="ts">
  import { LoadBookmarkletsError } from '$lib/errors';
  import resolve from '$lib/resolve';

  /** @type {import('@sveltejs/kit').Load} */
  export async function load({ fetch }) {
    let bookmarklets: string[] = [];
    console.log('again!!!!');
    try {
      bookmarklets = await fetch(resolve('/bookmarklet/all.json'))
        .then(res => (res.ok ? res.json() : Promise.reject(new LoadBookmarkletsError())))
        .then(({ bookmarklets }) => bookmarklets);
    } catch (error) {
      console.error(error);
      return {
        status: 500,
        error: new LoadBookmarkletsError(),
      };
    }
    return {
      props: {
        bookmarklets,
      },
    };
  }
</script>

<script lang="ts">
  import Link from '$lib/Link.svelte';
  export let bookmarklets: string[] = [];
</script>

<h2>Bookmarklets</h2>
<ul>
  {#each bookmarklets as url}
    <li>
      <Link href={url}>{url}</Link>
    </li>
  {/each}
</ul>
