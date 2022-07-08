import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const CreateSchema = schema.create({
  role: schema.object().members({
    name: schema.string({ trim: true }, [rules.maxLength(255)]),
  }),
})

export const UpdateCreateSchema = schema.create({
  role: schema.object().members({
    name: schema.string({ trim: true }, [rules.maxLength(255)]),
  }),
})