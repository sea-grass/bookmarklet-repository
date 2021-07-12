<script>
  import { base } from '$app/paths';

  export let href;

  const resolve = path => {
    if (path.startsWith('/')) {
      return `${base}${path}`;
    }

    return path;
  };
</script>

<a href={resolve(href)}><slot/></a>
