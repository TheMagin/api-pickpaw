import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const CreateSchema = schema.create({
  pet: schema.object().members({
    name: schema.string({ trim: true }, [rules.required(), rules.maxLength(255)]),
    photo: schema.string.optional({ trim: true }, [rules.maxLength(255)]),
    age: schema.number.optional([rules.maxLength(3)]),
    gender: schema.string.optional({ trim: true }, [rules.maxLength(255)]),
    additionInformation: schema.string.optional({ trim: true }, [rules.maxLength(255)]),
    idPëtBreed: schema.number.optional([rules.unsigned()]),
    idPetType: schema.number.optional([rules.unsigned()]),
    idUser: schema.number.optional([rules.unsigned()]),
  }),
})

export const UpdateCreateSchema = schema.create({
  pet: schema.object().members({
    name: schema.string({ trim: true }, [rules.required(), rules.maxLength(255)]),
    photo: schema.string.optional({ trim: true }, [rules.maxLength(255)]),
    age: schema.number.optional([rules.maxLength(3)]),
    gender: schema.string.optional({ trim: true }, [rules.maxLength(255)]),
    additionInformation: schema.string.optional({ trim: true }, [rules.maxLength(255)]),
    idPëtBreed: schema.number.optional([rules.unsigned()]),
    idPetType: schema.number.optional([rules.unsigned()]),
    idUser: schema.number.optional([rules.unsigned()]),
  }),
})
