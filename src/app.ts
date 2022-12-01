import { fastify, FastifyInstance } from 'fastify'
import { IncomingMessage, Server, ServerResponse } from 'http'

const server: FastifyInstance<Server, IncomingMessage, ServerResponse> =
  fastify({ logger: true })

server.route({
  url: '/',
  logLevel: 'info',
  method: ['GET', 'HEAD'],
  handler: async (request, reply) => {
    return { uptime: process.uptime() }
  }
})

export default server
