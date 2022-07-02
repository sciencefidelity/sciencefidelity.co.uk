import NodeGoecoder from "node-geocoder"

const options = {
  provider: "google" as const,
  apiKey: process.env.GEOCODER_API_KEY
}

export const geocoder = NodeGoecoder(options)
