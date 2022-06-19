import React from "react"
import { createRoot } from "react-dom/client"
import App from "./App"
import "modern-normalize"
import "styles/globals.scss"

// eslint-disable-next-line
createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
