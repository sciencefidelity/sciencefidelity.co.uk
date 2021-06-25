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
    const ctx = canvas.getContext('2d')
    const img = new Image()

    const win = {
      w: window.innerWidth,
      h: window.innerHeight,
    }

    const frameCount = frames
    const currentFrame = (index:number) => (
      `videos/${video}/frame-${index.toString().padStart(6, '0')}.TIFF.webp`
    )

    window.scrollTo(0, 0)
    document.body.style.height = `${frameCount * 3}vh`

    if (ctx !== null) {
      ctx.clearRect(0, 0, win.w, win.h)
    }

    const preloadImages = () => {
      for (let i = 1; i <= frameCount; i++) {
        const img = new Image()
        img.src = currentFrame(i)
      }
    }

    const imgRatio = 1920 / 1080
    const winRatio =  window.innerWidth / window.innerHeight

    img.src = currentFrame(1)

    const coverImg = () => {
      if (ctx !== null) {
        if (imgRatio > winRatio) {
          const h = window.innerWidth * imgRatio
          ctx.drawImage(img, 0, (window.innerHeight - h) / 2, window.innerWidth, h)
        }
        if (imgRatio < winRatio) {
          const w = window.innerWidth * winRatio / imgRatio
          ctx.drawImage(img, (win.w - w) / 2, 0, w, window.innerHeight)
        }
      }
    }

    const render = () => {
      ctx!.clearRect(0, 0, win.w, win.h)
      coverImg()
    }

    const init = () => {
      resize()
      render()
    }

    img.onload = init

    const resize = () => {
      win.w = window.innerWidth
      win.h = window.innerHeight
      canvas.width = win.w
      canvas.height = win.h
      canvas.style.width = `${win.w}px`
      canvas.style.height = `${win.h}px`
    }
    window.addEventListener('resize', resize)

    const updateImage = (index:number) => {
      img.src = currentFrame(index)
      if (ctx !== null) {
        ctx.drawImage(img, 0, 0)
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
