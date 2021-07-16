<script>
	import Link from '$lib/Link.svelte';
	import { useColorScheme } from '$lib/utils';

	const colorScheme$ = useColorScheme();
</script>

<svelte:head>
	<style>
		@import url('https://unpkg.com/@highlightjs/cdn-assets@11.1.0/styles/a11y-light.min.css');

		@media (prefers-color-scheme: dark) {
			@import url('https://unpkg.com/@highlightjs/cdn-assets@11.1.0/styles/a11y-dark.min.css');
		}
	</style>
</svelte:head>
<h1>Bookmarklet Repository</h1>
<ul>
	<li>
		<Link href="/">Home</Link>
	</li>
	<li>
		<Link href="/bookmarklet">Bookmarklets</Link>
	</li>
</ul>

<slot />
