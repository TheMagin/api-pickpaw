import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const LoginSchema = schema.create({
  user: schema.object().members({
    email: schema.string({ trim: true }, [rules.required(), rules.maxLength(255)]),
    password: schema.string({ trim: true }, [rules.required()]),
  }),
})

export const LoginTokeSchema = schema.create({
  user: schema.object().members({
    id: schema.number(),
  }),
})

export const CreateSchema = schema.create({
  user: schema.object().members({
    email: schema.string({ trim: true }, [
      rules.email(),
      rules.unique({ table: 'users', column: 'email' }),
    ]),
    lastName: schema.string.optional({ trim: true }, [rules.maxLength(255)]),
    password: schema.string({ trim: true }, [rules.required(), rules.maxLength(255)]),

    photo: schema.string.optional({ trim: true }, [rules.maxLength(255)]),
    name: schema.string.optional({ trim: true }, [rules.maxLength(255)]),
    phone: schema.string.optional({ trim: true }, [rules.maxLength(255)]),
    idRol: schema.number.optional([rules.unsigned()]),
  }),
})

export const UpdateCreateSchema = schema.create({
  user: schema.object().members({
    email: schema.string.optional({ trim: true }, [rules.maxLength(255)]),
    lastName: schema.string.optional({ trim: true }, [rules.maxLength(255)]),
    password: schema.string.optional({ trim: true }, [rules.maxLength(255)]),
    photo: schema.string.optional({ trim: true }, [rules.maxLength(255)]),
    name: schema.string.optional({ trim: true }, [rules.maxLength(255)]),
    phone: schema.string.optional({ trim: true }, [rules.maxLength(255)]),

    idRol: schema.number.optional([rules.unsigned()]),
  }),
})

export const createPasswordTokenSchema = schema.create({
  passwordNew: schema.string({ trim: true }, [
    rules.required(),
    rules.minLength(6),
    rules.confirmed('passwordConfirmation'),
  ]),
  passwordConfirmation: schema.string({ trim: true }, [rules.required(), rules.minLength(6)]),
  token: schema.string({ trim: true }, [rules.required()]),
})
