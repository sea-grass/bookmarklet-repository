<script context="module">
	export async function load({ fetch, page: { params } }) {
		const { file } = params;
		const res = await fetch(`/data/${file}/data.json`);

		if (!res.ok) {
			return {
				status: 404,
				error: 'could not load bookmarklet data'
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
				repoUrl
			}
		};
	}
</script>

<script>
	import Link from '$lib/Link.svelte';

	export let name;
	export let pre;
	export let url;
	export let repoUrl;
</script>

<h2>{name}</h2>
<p>
	<i><Link href={repoUrl} target="_blank">View on GitHub</Link></i>
</p>
<p>
	Drag this link to your bookmarks bar: <Link href={url}>{name}</Link>
</p>
{@html pre}
