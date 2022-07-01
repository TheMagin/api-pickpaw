import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const CreateSchema = schema.create({
  address: schema.object().members({
    street: schema.string({ trim: true }, [rules.required(), rules.maxLength(255)]),
  }),
})