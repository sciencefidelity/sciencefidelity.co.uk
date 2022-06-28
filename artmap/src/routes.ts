import { items, Item } from "./items"
import { FastifyInstance } from "fastify"

export async function routes(fastify: FastifyInstance, _options: unknown) {
  fastify.get("/",async (_request, _reply) => {
    return { hello: "world" }
  })
}