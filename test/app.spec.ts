import { expect, test } from 'vitest'

import { rootResponseSchema } from '../src/schemas/root'
import server from '../src/server'

test('with HTTP injection', async () => {
  const response = await server.inject({
    method: 'GET',
    url: '/'
  })

  const result = rootResponseSchema.safeParse(response.json())

  expect(response.statusCode).toBe(200)
  expect(result.success).toBe(true)
})
