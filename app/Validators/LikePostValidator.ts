import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const CreateSchema = schema.create({
  likePost: schema.object().members({
    title: schema.string({ trim: true }, [rules.maxLength(255)]),
    description: schema.string.optional({ trim: true }, [rules.maxLength(255)]),
    status: schema.string.optional({ trim: true }, [rules.maxLength(255)]),
    post_state: schema.boolean.optional(),
    user_id: schema.number.optional(),
    post_id: schema.number.optional([rules.unsigned()]),
    pet_id: schema.number.optional([rules.unsigned()]),
    type_post_id: schema.number.optional([rules.unsigned()]),
  }),
})

export const UpdateCreateSchema = schema.create({
  likePost: schema.object().members({
    title: schema.string.optional({ trim: true }, [rules.maxLength(255)]),
    description: schema.string.optional({ trim: true }, [rules.maxLength(255)]),
    status: schema.string.optional({ trim: true }, [rules.maxLength(255)]),
    post_state: schema.boolean.optional(),
    user_id: schema.number.optional(),
    post_id: schema.number.optional([rules.unsigned()]),
    pet_id: schema.number.optional([rules.unsigned()]),
    type_post_id: schema.number.optional([rules.unsigned()]),
  }),
})
