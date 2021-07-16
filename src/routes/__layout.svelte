<script>
	import Link from '$lib/Link.svelte';
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.1.0/styles/default.min.css"
	/>
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
