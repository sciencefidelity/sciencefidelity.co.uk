import React, { FC } from "react"
import { IKImage } from "imagekitio-react"

const Index: FC = () => {
  return (
    <div className="container">
      <IKImage
        className="image"
        path="default-image.jpg"
        transformation={[{ width: 300, height: 700 }]}
        lqip={{ active: true, quality: 10 }}
        loading="lazy"
        width={300}
        height={700}
      />
    </div>
  )
}
export default Index
