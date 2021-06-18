<script context="module" lang="ts">
  export const prerender = true
</script>

<svelte:head>
  <title>Dancing objects</title>
  <meta name="description" content="Scroll to make the objects dance.">
</svelte:head>

<div id="nav">
  <a sveltekit:prefetch href="/dance"><div>🏓</div></a>
  <a sveltekit:prefetch href="/dance"><div>🪙</div></a>
  <a sveltekit:prefetch href="/dance"><div>🔥</div></a>
  <a sveltekit:prefetch href="/dance"><div>✂️</div></a>
  <a sveltekit:prefetch href="/dance"><div>🙂</div></a>
</div>

<style lang="scss">
* {
  margin: 0;
}

#nav {
  display: flex;
  flex-direction: row;
  margin: auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
  div {
    text-align: center;
    font-size: 6rem;
    margin: 1rem;
  }
}

a {
  text-decoration: none;
}

</style>
