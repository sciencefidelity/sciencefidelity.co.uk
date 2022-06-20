import "sanitize.css/sanitize.css"
import "sanitize.css/assets.css"
import "sanitize.css/reduce-motion.css"
import "sanitize.css/typography.css"
import "@/style.scss"

const counter = document.querySelector("#counter") as HTMLSpanElement
let seconds = 0

export const add = (a: number, b: number): number => {
  return a + b
}

export const timer = (): void => {
  setInterval(() => {
    seconds += 1
    if (counter) {
      counter.textContent = seconds.toString()
    }
  }, 1000)
}

timer()
