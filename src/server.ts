import { fastify, FastifyInstance } from 'fastify'
import { IncomingMessage, Server, ServerResponse } from 'http'
import zodToJsonSchema from 'zod-to-json-schema'

import { rootResponseSchema } from './schemas/root'

const server: FastifyInstance<Server, IncomingMessage, ServerResponse> =
  fastify({ logger: true })

server.route({
  url: '/',
  logLevel: 'info',
  method: ['GET', 'HEAD'],
  schema: {
    response: {
      200: zodToJsonSchema(rootResponseSchema, 'rootResponseSchema')
    }
  },
  handler: async () => {
    return { uptime: process.uptime() }
  }
})

export default server
