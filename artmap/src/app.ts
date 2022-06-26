import Fastify, { FastifyInstance } from "fastify"

const server: FastifyInstance = Fastify({ logger: true })

server.get("/", async (_request, _reply) => {
  return { hello: "world" }
})

const optionsObject = {
  port: 3000,
}

// start the server
const start = async () => {
  try {
    await server.listen(optionsObject)
  } catch (err) {
    server.log.error(err)
    process.exit(1)
  }
}

start()