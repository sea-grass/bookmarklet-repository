<script context="module" type="ts">
	export async function load({ fetch }) {
		const res = await fetch('/api/bookmarklet/all.json');

		if (!res.ok) {
			return {
				status: 404,
				error: 'Could not load bookmarklets'
			};
		}

		const { paths } = await res.json();

		const urls = paths.map((path: string) => `/bookmarklet/${path}`);

		return {
			props: {
				urls
			}
		};
	}
</script>

<script>
	import Link from '$lib/Link.svelte';

	export let urls = [];
</script>

<h2>Bookmarklets</h2>
<ul>
	{#each urls as url}
		<li>
			<Link href={url}>{url}</Link>
		</li>
	{/each}
</ul>
