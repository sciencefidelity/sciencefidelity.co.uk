<script context="module" lang="ts">
  export const prerender = true;
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

html {
  height: 100vh;
}

body {
  background: #fff;
  position: relative;
}

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

canvas {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100vw;
  z-index: -2;
}

#home {
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  mix-blend-mode: luminosity;
  padding: 0.4rem;
  background: rgba(white, 0.4);
  width: 2rem;
  height: 2rem;
  border-radius: 3rem;
  transition: background 0.3s;
  z-index: 2;
  &:hover {
    background: rgba(white, 0.6);
    transition: background 0.3s;
  }
}

.icon {
  fill: rgba(black, 0.7);
}

</style>
