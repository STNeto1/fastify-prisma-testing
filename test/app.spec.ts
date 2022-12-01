import { expect, test } from 'vitest'

import server from '../src/app'

test('with HTTP injection', async () => {
  const response = await server.inject({
    method: 'GET',
    url: '/'
  })

  expect(response.statusCode).toBe(200)
})
