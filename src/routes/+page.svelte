<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;

</script>
<h1>Home - Welcome to SvelteKit</h1>
<a href="/about">About my site</a>

<p>
  one: {data.one}
</p>
<p>
  two: {data.two}
</p>
<p>
  three:
  {#await data.streamed.three}
    Loading...
  {:then value}
    {value}
  {:catch error}
    {error.message}
  {/await}
</p>
