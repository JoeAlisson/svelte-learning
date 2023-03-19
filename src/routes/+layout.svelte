<script lang="ts">
  export let data;
</script>

<nav>
  <a href="/">Home</a>
  <a href="/about">About</a>
  <a href="/settings">Settings</a>
</nav>

User: {data.user.name} ({data.user.sessionId})

<slot></slot>
