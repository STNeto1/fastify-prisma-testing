import { z } from 'zod'

export type TCreateNoteSchema = z.infer<typeof createNoteSchema>
export const createNoteSchema = z.object({
  title: z.string(),
  content: z.string()
})
export const createNoteResponseSchema = z.object({
  id: z.string().cuid(),
  title: z.string(),
  content: z.string()
})
