<script context="module">
  export const prerender = true

  const html = document.documentElement
  const canvas = document.getElementById('anim')
  const context = canvas.getContext('2d')

  const frameCount = Number(canvas.dataset.count)
  const currentFrame = (index) => (
    `../static/videos/${canvas.dataset.id}/frame-${index.toString().padStart(6, '0')}.TIFF.webp`
  )

  document.body.style.height = `${frameCount * 3}vh`

  const preloadImages = () => {
    for (let i = 1; i < frameCount; i++) {
      const img = new Image()
      img.src = currentFrame(i)
    }
  }

  const img = new Image()
  img.src = currentFrame(1)
  canvas.width=1920
  canvas.height=1080
  img.onload=function(){
    context.drawImage(img, 0, 0)
  }

  const updateImage = (index) => {
    img.src = currentFrame(index)
    context.drawImage(img, 0, 0)
  }

  window.addEventListener('scroll', () => {
    const scrollTop = html.scrollTop
    const maxScrollTop = html.scrollHeight - window.innerHeight
    const scrollFraction = scrollTop / maxScrollTop
    const frameIndex = Math.min(
      frameCount - 1,
      Math.ceil(scrollFraction * frameCount)
    )

    requestAnimationFrame(() => updateImage(frameIndex + 1))
  })

  preloadImages()

</script>

<svelte:head>
  <title>Dancing objects</title>
  <meta name="description" content="Scroll to make the objects dance.">
</svelte:head>

<a sveltekit:prefetch href="/">
  <div id="home">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"/></svg>
  </div>
</a>
<canvas id="anim" data-id="ball" data-count="830"/>

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
