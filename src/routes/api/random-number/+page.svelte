<script lang="ts">
  import { invalidate, invalidateAll } from "$app/navigation";
  import type { PageData } from './$types';

  export let data: PageData;

  function rerunLoadFunction() {
    invalidate('app:random');
    invalidate('http://localhost:5173/random-number')
    invalidate(url => url.href.includes('random-number'))
    invalidateAll()
  }
</script>

<p>rnadom number: {data.number}</p>
<button on:click={rerunLoadFunction}>Update random number</button>
