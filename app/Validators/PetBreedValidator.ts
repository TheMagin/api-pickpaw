import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const CreateSchema = schema.create({
  petBreed: schema.object().members({
    name: schema.string({ trim: true }, [rules.required(), rules.maxLength(255)]),
    idPetType: schema.number.optional([rules.unsigned()]),
  }),
})

export const UpdateCreateSchema = schema.create({
  petBreed: schema.object().members({
    name: schema.string.optional({ trim: true }, [rules.maxLength(255)]),
    idPetType: schema.number.optional([rules.unsigned()]),
  }),
})
