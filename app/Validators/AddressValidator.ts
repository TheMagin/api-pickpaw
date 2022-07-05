import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const CreateSchema = schema.create({
  address: schema.object().members({
    street: schema.string({ trim: true }, [rules.required(), rules.maxLength(255)]),
    idRegion: schema.number.optional(),
    idComuna: schema.number.optional([rules.unsigned()]),
    idUser: schema.number.optional([rules.unsigned()]),
  }),
})

export const UpdateCreateSchema = schema.create({
  address: schema.object().members({
    street: schema.string.optional({ trim: true }, [rules.maxLength(255)]),
    idRegion: schema.number.optional(),
    idComuna: schema.number.optional([rules.unsigned()]),
    idUser: schema.number.optional([rules.unsigned()]),
  }),
})
