<script context="module">
export const prerender = true
import { onMount } from 'svelte'

onMount(async () => {
  const html = document.documentElement
  const canvas = document.getElementById('anim')
  // const context = canvas.getContext('2d')

  const frameCount = 830
  const currentFrame = (index) => (`../videos/ball/frame-${index.toString().padStart(6, '0')}.TIFF.webp`)

  document.body.style.height = `${frameCount * 3}vh`

  const preloadImages = () => {
    for (let i = 1; i < frameCount; i++) {
      const img = new Image()
      img.src = currentFrame(i)
    }
  }

  const img = new Image()
  img.src = currentFrame(1)
  // canvas.width=1920
  // canvas.height=1080
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

})

</script>

<svelte:head>
  <title>Dancing objects</title>
  <meta name="description" content="Scroll to make the objects dance.">
</svelte:head>

<style lang="scss">

* {
  margin: 0;
}

canvas {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100vw;
  z-index: -2;
}

</style>

<!-- <a sveltekit:prefetch href="/">
  <div id="home">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"/></svg>
  </div>
</a> -->
<canvas id="anim" data-id="ball" data-count="830"/>
