import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const CreateSchema = schema.create({
  tag: schema.object().members({
    idPost: schema.number.optional(),
    idTypeTag: schema.number.optional([rules.unsigned()]),
  }),
})

export const UpdateCreateSchema = schema.create({
  tag: schema.object().members({
    idPost: schema.number.optional(),
    idTypeTag: schema.number.optional([rules.unsigned()]),
  }),
})
