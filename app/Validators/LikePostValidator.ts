import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const CreateSchema = schema.create({
  likePost: schema.object().members({
    idUser: schema.number.optional([rules.unsigned()]),
    idPost: schema.number.optional([rules.unsigned()]),
    idPet: schema.number.optional([rules.unsigned()]),
    idTypePost: schema.number.optional([rules.unsigned()]),
  }),
})

export const UpdateCreateSchema = schema.create({
  likePost: schema.object().members({
    idUser: schema.number.optional([rules.unsigned()]),
    idPost: schema.number.optional([rules.unsigned()]),
    idPet: schema.number.optional([rules.unsigned()]),
    idTypePost: schema.number.optional([rules.unsigned()]),
  }),
})
