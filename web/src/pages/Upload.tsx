import React, { FC } from "react"
import { IKUpload } from "imagekitio-react"

const onError = (err: any) => {
  console.log("Error", err)
}

const onSuccess = (res: any) => {
  console.log("Success", res)
}

const Upload: FC = () => {
  return (
    <div className="container">
      <p style={{ paddingBottom: "1rem" }}>Upload an image</p>
      <IKUpload
        fileName="test-upload.jpg"
        onError={onError}
        onSuccess={onSuccess}
      />
    </div>
  )
}
export default Upload
