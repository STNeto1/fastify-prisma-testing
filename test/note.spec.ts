import { expect, test } from 'vitest'
import { createNoteResponseSchema } from '../src/modules/routes/notes/schemas'

import server from '../src/server'

test('create note', async () => {
  const response = await server.inject({
    method: 'POST',
    url: '/notes/create',
    payload: {
      title: 'test',
      content: 'test'
    }
  })

  const result = createNoteResponseSchema.safeParse(response.json())

  expect(response.statusCode).toBe(201)
  expect(result.success).toBe(true)
})
