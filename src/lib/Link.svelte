<script>
  import resolve from '$lib/resolve';

  let url;
  export { url as href };

  $: href = resolve(url);
</script>

<a {href} {...$$restProps} class="text-black visited:text-green-800"><slot /></a>
