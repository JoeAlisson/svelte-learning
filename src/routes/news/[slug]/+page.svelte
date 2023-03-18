<script lang="ts">
  import { PageData } from './$types';
  export let data: PageData;
</script>

<h1>{data.title}</h1>
<div>{@html data.content}</div>
