import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyReply,
  FastifyRequest
} from 'fastify'
import fp from 'fastify-plugin'
import zodToJsonSchema from 'zod-to-json-schema'

import {
  createNoteResponseSchema,
  createNoteSchema,
  TCreateNoteSchema
} from './schemas'

export default fp(
  async (server: FastifyInstance, _: FastifyPluginOptions, next: Function) => {
    server.route({
      url: '/notes/create',
      logLevel: 'warn',
      method: ['POST'],
      schema: {
        body: zodToJsonSchema(createNoteSchema, 'createNoteSchema'),
        response: {
          201: zodToJsonSchema(
            createNoteResponseSchema,
            'createNoteResponseSchema'
          )
        }
      },
      handler: async (request: FastifyRequest, reply: FastifyReply) => {
        const body = request.body as TCreateNoteSchema

        const note = await server.prisma.note.create({
          data: {
            title: body.title,
            content: body.content
          }
        })

        return reply.status(201).send(note)
      }
    })

    next()
  }
)
