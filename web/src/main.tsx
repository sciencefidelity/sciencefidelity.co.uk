import React from "react"
import { createRoot } from "react-dom/client"
import "modern-normalize"
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
