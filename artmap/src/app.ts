import * as dotenv from "dotenv"
import Fastify, { FastifyInstance } from "fastify"

dotenv.config({ path: ".env" })

const server: FastifyInstance = Fastify({ logger: true })

server.get("/", async (_request, _reply) => {
  return { hello: "world" }
})

// server options
const options = {
  port: parseInt(process.env.PORT || "3000"),
  host: process.env.HOST || "localhost"
}

// start server
const start = async () => {
  try {
    await server.listen(options)
  } catch (err) {
    server.log.error(err)
    process.exit(1)
  }
}

start()
