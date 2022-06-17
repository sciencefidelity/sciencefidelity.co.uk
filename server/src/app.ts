import * as dotenv from "dotenv"
import "module-alias/register"
import express from "express"
import ImageKit from "imagekit"

dotenv.config({ path: ".env" })

const app = express()
const imagekit = new ImageKit({
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT || "",
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY || "",
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY || ""
})

app.use(function(_req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

app.get("/auth", function (_req, res) {
  var result = imagekit.getAuthenticationParameters()
  res.send(result)
});

app.listen(3001, function () {
  console.log("Live at Port 3001")
})
