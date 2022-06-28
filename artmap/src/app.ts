import * as dotenv from "dotenv"
import Fastify, { FastifyInstance } from "fastify"
import { items } from "./items"

dotenv.config({ path: ".env" })

type Item = {
  id: number
  name: string
}

const server: FastifyInstance = Fastify({ logger: true })

server.get("/items", async (_, reply) => {
  reply.send(items)
})

server.get("/items/:id", async (request, reply) => {
  const { id } = request.params as Item
  const item = items.find(item => item.id === id)
  reply.send(item)
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
