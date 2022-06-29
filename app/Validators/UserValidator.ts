import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const LoginSchema = schema.create({
  user: schema.object().members({
    email: schema.string({ trim: true }, [rules.required(), rules.maxLength(255)]),
    password: schema.string({ trim: true }, [rules.required()]),
  }),
})

export const CreateSchema = schema.create({
  user: schema.object().members({
    email: schema.string({ trim: true }, [rules.required(), rules.maxLength(255)]),
    password: schema.string({ trim: true }, [rules.required()]),
  }),
})
