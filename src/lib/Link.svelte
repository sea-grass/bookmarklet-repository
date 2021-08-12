<script>
  import resolve from '$lib/resolve';

	export let href;

</script>

<a href={resolve(href)} {...$$restProps}><slot /></a>

<style>
	a {
		--color: #000;
		--font-weight: bold;
		--font-family: 'Arial';

		--visited-color: #454;
		--visited-outline: 1px solid green;
	}
	a,
	a > :global(*) {
		color: var(--color);
		font-weight: var(--font-weight);
		font-family: var(--font-family);
	}
	a:visited,
	a:visited > :global(*) {
		color: var(--visited-color);
		outline: var(--visited-outline);
	}
</style>
