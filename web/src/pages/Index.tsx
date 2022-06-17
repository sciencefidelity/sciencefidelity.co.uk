import React, { FC } from "react"
import { IKImage } from "imagekitio-react"

const urlEndpoint = import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT

const Index: FC = () => {
  return (
    <div>
      <IKImage
        urlEndpoint={urlEndpoint}
        path="default-image.jpg"
      />
    </div>
  )
}
export default Index
