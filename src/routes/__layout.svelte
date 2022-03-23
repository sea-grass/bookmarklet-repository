<script type="ts">
  import '../tailwind.css';
  import '../global.css';
  import Link from '$lib/Link.svelte';
  import { buildDate } from '$lib/variables';
  import resolve from '$lib/resolve';

  const icon = resolve('/favicon.png');
</script>

<svelte:head>
  <link rel="icon" href={icon} />
</svelte:head>

<div class="max-w-md my-0 mx-auto">
  <Link href="/">
    <h1 class="font-sans text-4xl text-blue-500">Bookmarklet Repository</h1>
  </Link>
  <hr />
  <slot />
  <div>
    <i>Last built on {buildDate}</i>
  </div>
</div>
