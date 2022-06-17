import React from "react"
import { createRoot } from "react-dom/client"
import { IKContext } from "imagekitio-react"
import { Route, Switch } from "wouter"
import "modern-normalize"
import "styles/globals.scss"
import Index from "pages/Index"
import Upload from "pages/Upload"

const container = document.getElementById("app")
// eslint-disable-next-line
const root = createRoot(container!)
const urlEndpoint = import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT
const publicKey = import.meta.env.VITE_IMAGEKIT_PUBLIC_KEY
const authenticationEndpoint = import.meta.env.VITE_AUTH_ENDPOINT

root.render(
  <React.StrictMode>
    <IKContext
      authenticationEndpoint={authenticationEndpoint}
      publicKey={publicKey}
      urlEndpoint={urlEndpoint}
    >
      <Switch>
        <Route path="/"><Index /></Route>
        <Route path="/upload"><Upload /></Route>
      </Switch>
    </IKContext>
  </React.StrictMode>
)
