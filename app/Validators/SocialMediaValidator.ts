import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const CreateSchema = schema.create({
  socialMedia: schema.object().members({
    account: schema.string({ trim: true }, [rules.required(), rules.maxLength(255)]),
    typeSocialMediaId: schema.number.optional([rules.unsigned()]),
    idUser: schema.number.optional([rules.unsigned()]),
  }),
})
