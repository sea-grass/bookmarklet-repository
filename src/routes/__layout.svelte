<script type="ts">
  import '../tailwind.css';
  import '../global.css';
  import Link from '$lib/Link.svelte';
  import { buildDate } from '$lib/variables';
</script>

<div class="max-w-md my-0 mx-auto">
  <Link href="/"><h1 class="font-sans text-4xl text-blue-500">Bookmarklet Repository</h1></Link>
  <hr />
  <slot />
  <div>
    <i>Last built on {buildDate}</i>
  </div>
</div>
