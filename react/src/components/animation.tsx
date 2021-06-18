import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import '../scss/animation.scss'

const Animation = (props:any) => {

  useEffect(() => {
    const html = document.documentElement
    const canvas = document.getElementById('anim') as HTMLCanvasElement
    const context = canvas.getContext('2d')

    const frameCount = props.frames
    console.log(frameCount)
    const currentFrame = (index:number) => (
      `videos/${props.video}/frame-${index.toString().padStart(6, '0')}.TIFF.webp`
    )

    document.body.style.height = `${frameCount * 3}vh`

    const preloadImages = async () => {
      for (let i = 1; i < frameCount; i++) {
        const img = new Image()
        img.src = currentFrame(i)
      }
    }

    const img = new Image()
    img.src = currentFrame(1)
    img.onload=function() {
      if (context !== null) {
        context.drawImage(img, 0, 0)
      }
    }

    const updateImage = (index:number) => {
      img.src = currentFrame(index)
      if (context !== null) {
        context.drawImage(img, 0, 0)
      }
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

  return (
    <section>
      <canvas
        id="anim"
        height="1080"
        width="1920"
      />
    </section>
  )
}

Animation.propTypes = {
  video: PropTypes.string,
  frames: PropTypes.number
}

export default Animation
