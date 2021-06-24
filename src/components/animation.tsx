import React, { FC, useEffect } from 'react'
import PropTypes from 'prop-types'

import '../scss/animation.scss'

interface Props {
  video: string,
  frames: number
}

const Animation:FC<Props> = ({ video, frames }) => {

  useEffect(() => {
    const html = document.documentElement
    const canvas = document.getElementById(video) as HTMLCanvasElement
    const context = canvas.getContext('2d')

    const frameCount = frames
    const currentFrame = (index:number) => (
      `videos/${video}/frame-${index.toString().padStart(6, '0')}.TIFF.webp`
    )

    window.scrollTo(0, 0)
    document.body.style.height = `${frameCount * 3}vh`

    if (context !== null) {
      context.clearRect(0, 0, canvas.width, canvas.height)
    }

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
    img.onload = function() {
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
      let scrollTop = html.scrollTop
      const maxScrollTop = html.scrollHeight - window.innerHeight
      const scrollFraction = scrollTop / maxScrollTop
      const frameIndex = Math.min(
        frameCount - 1,
        Math.ceil(scrollFraction * frameCount)
      )
      requestAnimationFrame(() => updateImage(frameIndex + 1))
    })

    preloadImages()
  }, [video])

  return (
    <section>
      {video === 'ball' && <canvas id="ball"></canvas>}
      {video === 'coin' && <canvas id="coin"></canvas>}
      {video === 'flame' && <canvas id="flame"></canvas>}
      {video === 'scissors' && <canvas id="scissors"></canvas>}
      {video === 'bounce' && <canvas id="bounce"></canvas>}
    </section>
  )
}

Animation.propTypes = {
  video: PropTypes.string.isRequired,
  frames: PropTypes.number.isRequired
}

export default Animation
