import React from "react"
import { createRoot } from "react-dom/client"
import { IKContext } from "imagekitio-react"
import "modern-normalize"
import "styles/globals.scss"
import Index from "pages/Index"

const container = document.getElementById("app")
// eslint-disable-next-line
const root = createRoot(container!)
const urlEndpoint = import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT

root.render(
  <React.StrictMode>
    <IKContext urlEndpoint={urlEndpoint} >
      <Index />
    </IKContext>
  </React.StrictMode>
)
