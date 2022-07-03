import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Mail from '@ioc:Adonis/Addons/Mail'
import User from 'App/Models/Users'
import Encryption from '@ioc:Adonis/Core/Encryption'
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

  //Function CREATE Default
  public async store({ request, response, auth }: HttpContextContract) {
    //Call method validate
    const { user: data } = await request.validate({ schema: CreateSchema })

    const userModel = new User()

    userModel.email = data.email
    userModel.activate = data.activate
    userModel.password = data.password
    userModel.roles_id = data.idRol
    userModel.phone = data.phone
    userModel.name = data.name
    userModel.last_name = data.lastName

    try {
      const user = await User.findByOrFail('email', data.email)
      const token = await auth.use('api').generate(user)
      const encrypted = Encryption.encrypt(token.tokenHash)
      //save user
      await userModel.save()

      await Mail.use('sendgrid').send((message) => {
        message
          .from('noreply@pickpaw.cl')
          .to(data.email)
          .subject('Confirmación de email')
          .htmlView('email_verify', {
            name: `${user.name} ${user.last_name}`,
            url: `https://dev.pickpaw.cl/register/createProfile?t=${encrypted}&t2=${user.id}`,
          })
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

  //Function GET Default
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
