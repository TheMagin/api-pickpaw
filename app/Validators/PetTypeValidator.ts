import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const CreateSchema = schema.create({
  petType: schema.object().members({
    name: schema.string({ trim: true }, [rules.required(), rules.maxLength(255)]),
  }),
})

export const UpdateCreateSchema = schema.create({
  petType: schema.object().members({
    name: schema.string.optional({ trim: true }, [rules.maxLength(255)]),
  }),
})
