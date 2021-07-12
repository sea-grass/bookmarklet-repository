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

		return {
			props: {
				name,
				pre,
				url
			}
		};
	}
</script>

<script>
	export let name;
	export let pre;
	export let url;
</script>

<h2>{name}</h2>
Drag this link to your bookmarks bar:<a href={url}>{name}</a>
{@html pre}
