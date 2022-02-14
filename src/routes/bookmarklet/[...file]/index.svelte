<script context="module" type="ts">
  export async function load({ fetch, params }) {
    const { file } = params;
    const res = await fetch(`/api/bookmarklet/${file}/data.json`);

    if (!res.ok) {
      return {
        status: 404,
        error: 'could not load bookmarklet data',
      };
    }

    const { name, pre, url } = await res.json();

    const repoUrl =
      'https://github.com/sea-grass/bookmarklet-repository/blob/main/bookmarklets/' + file + '.js';

    return {
      props: {
        name,
        pre,
        url,
        repoUrl,
      },
    };
  }
</script>

<script type="ts">
  import Link from '$lib/Link.svelte';

  export let name: string;
  export let pre: string;
  export let url: string;
  export let repoUrl: string;
</script>

<h2>{name}</h2>
<p>
  <i><Link href={repoUrl} target="_blank">View on GitHub</Link></i>
</p>
<p>
  Drag this link to your bookmarks bar: <Link href={url}>{name}</Link>
</p>
{@html pre}
