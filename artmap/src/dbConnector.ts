import fastfyPlugin, { FastifyPlugin } from "fastify"
import fastifyMongodb from "@fastify/mongodb"
import { FastifyInstance } from "fastify"

async function dbConnector(fastify: FastifyInstance, _options: unknown) {
	fastify.register(fastifyMongodb, {
		url: process.env.MONGO_CONNECTION_STRING
	})
}

module.exports = fastfyPlugin(dbConnector)
