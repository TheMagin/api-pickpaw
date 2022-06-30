import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Mail from '@ioc:Adonis/Addons/Mail'
import User from 'App/Models/Users'

import { CreateSchema, LoginSchema } from 'App/Validators/UserValidator'

export default class UsersController {
  public async login({ request, auth, response }: HttpContextContract) {
    //Call method validate
    const { user } = await request.validate({ schema: LoginSchema })

    try {
      const token = await auth.attempt(user.email, user.password)
      //const usuario = await auth.authenticate()

      return response.created({
        status: true,
        message: 'Inició sesión correctamente',
        token,
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Credenciales incorrectas',
        error: error,
      })
    }
  }

  public async store({ request, response }: HttpContextContract) {
    //Call method validate
    const { user: data } = await request.validate({ schema: CreateSchema })

    const userModel = new User()

    userModel.email = data.email
    userModel.password = data.password

    try {
      //save user
      await userModel.save()
      await Mail.use('sendgrid').send((message) => {
        message
          .from('nicolasalarconsalcedo@gmail.com')
          .to(data.email)
          .subject('Confirmación de email')
          .html('Prueba qlo de registro')
      })
      //Function for Send mail with sengrid

      return response.created({
        status: true,
        message: 'Se creo el usuario',
        user: userModel.serialize(),
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'No se creo usuario',
        error: error,
      })
    }
  }

  public async index({ request, response }: HttpContextContract) {
    const { page = 1, limit = 10, ...filters } = request.qs()

    try {
      const user = await User.filter(filters).paginate(page, limit)

      return response.ok({
        status: true,
        message: 'Usuarios listados correctamente',
        user: user.serialize().data,
        meta: user.serialize().meta,
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al listar usuarios',
        error,
      })
    }
  }
}
