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
<div>
	<Link href="/"><h1>Bookmarklet Repository</h1></Link>
	<ul>
		<li>
			<Link href="/bookmarklet">Bookmarklets</Link>
		</li>
	</ul>
	<hr />
	<slot />
</div>

<style>
	div {
		max-width: 980px;
		margin: 0 auto;
	}

	div :global(p) {
		max-width: 460px;
	}
</style>
