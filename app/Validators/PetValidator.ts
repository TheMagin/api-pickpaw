import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const CreateSchema = schema.create({
  pet: schema.object().members({
    name: schema.string({ trim: true }, [rules.required(), rules.maxLength(255)]),
  }),
})