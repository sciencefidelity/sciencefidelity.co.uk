import React, { FC } from "react"
import { IKImage } from "imagekitio-react"

const Index: FC = () => {
  return (
    <div className="container">
      <IKImage
        className="image"
        path="test-upload_Ws458Rat5.jpg"
        transformation={[{ width: 800, height: 1400 }]}
        lqip={{ active: true, quality: 10 }}
        loading="lazy"
        width={400}
        height={700}
      />
    </div>
  )
}
export default Index
