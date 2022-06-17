import React from "react"
import { createRoot } from "react-dom/client"
import "sanitize.css/sanitize.css"
import "sanitize.css/assets.css"
import "sanitize.css/reduce-motion.css"
import "sanitize.css/typography.css"
import "styles/globals.scss"
import Index from "pages/Index"

const container = document.getElementById("app")
// eslint-disable-next-line
const root = createRoot(container!)

root.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>
)
