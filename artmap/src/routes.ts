import { items, Item } from "./items"
import { FastifyInstance } from "fastify"

export async function routes(fastify: FastifyInstance, _options: unknown) {
  const collection = fastify.mongo.db.collection("")
  fastify.get("/", async (_request, _reply) => {
    return { hello: "world" }
  })

  fastify.get("./items", async (_request, _reply) => {
    const result = await collection.find().toArray()
    if (result.length === 0) {
      throw new Error("No documents found")
    }
    return result
  })

  fastify.get("./items/:id",async (request, _reply) => {
    const result = await collection.findOne({ item: request.params.item })
    if (!result) {
      throw new Error("Invalid value")
    }
    return result
  })
}