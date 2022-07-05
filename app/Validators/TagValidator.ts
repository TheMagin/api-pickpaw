import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const CreateSchema = schema.create({
  tag: schema.object().members({
    post_id: schema.number.optional(),
    type_tag_id: schema.number.optional([rules.unsigned()]),
  }),
})

export const UpdateCreateSchema = schema.create({
  tag: schema.object().members({
    post_id: schema.number.optional(),
    type_tag_id: schema.number.optional([rules.unsigned()]),
  }),
})
