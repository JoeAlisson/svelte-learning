<script lang="ts">
  import type { PageData, ActionData } from './$types';

  export let data: PageData;
  export let form: ActionData;
</script>

{#if form?.success}
  <p> Successfully logged in! Welcome back, {data.user.name}</p>
{:else}
<form method="POST" action="?/login">
  {#if form?.missing}<p class="error">The email field is required</p>{/if}
  {#if form?.incorrect}<p class="error">Invalid credentials!</p>{/if}
  <label>
    Email
    <input type="email" name="email" value={form?.email ?? ''}/>
  </label>
  <label>
    Password
    <input type="password" name="password" />
  </label>
  <button>Log in</button>
  <button formaction="?/register">Register</button>
</form>
{/if}

