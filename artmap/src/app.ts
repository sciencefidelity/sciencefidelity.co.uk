import * as dotenv from "dotenv"
import Fastify, { FastifyInstance } from "fastify"

import { routes } from "./routes"

dotenv.config({ path: ".env" })

const fastify: FastifyInstance = Fastify({ logger: true })

fastify.register(routes)

// fastify.get("/items", async (_, reply) => {
//   reply.send(items)
// })

// fastify.get("/items/:id", async (request, reply) => {
//   const { id } = request.params as Item
//   const item = items.find(item => item.id === id)
//   reply.send(item)
// })

// server options
const options = {
  port: parseInt(process.env.PORT || "3000"),
  host: process.env.HOST || "localhost"
}

// start server
const start = async () => {
  try {
    await fastify.listen(options)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()
