import React, { FC } from "react"
import { IKImage } from "imagekitio-react"

const Index: FC = () => {
  return (
    <div className="container">
      <IKImage
        className="image"
        path="default-image.jpg"
        width={400}
        height={400}
      />
    </div>
  )
}
export default Index
