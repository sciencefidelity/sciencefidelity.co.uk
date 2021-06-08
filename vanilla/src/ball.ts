const html = document.documentElement
const canvas = <HTMLCanvasElement> document.getElementById('coin')
const context = canvas!.getContext('2d')

const frameCount = 602
const currentFrame = (index:number) => (
  `../videos/coin/frame-${index.toString().padStart(6, '0')}.jpg.webp`
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
canvas!.width=1920
canvas!.height=1080
img.onload=function(){
  context!.drawImage(img, 0, 0)
}

const updateImage = (index:number) => {
  img.src = currentFrame(index)
  context!.drawImage(img, 0, 0)
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
