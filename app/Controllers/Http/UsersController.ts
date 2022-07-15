import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Mail from '@ioc:Adonis/Addons/Mail'
import User from 'App/Models/Users'
import Encryption from '@ioc:Adonis/Core/Encryption'
import {
  CreateSchema,
  LoginSchema,
  createPasswordTokenSchema,
  UpdateCreateSchema,
  LoginTokeSchema,
} from 'App/Validators/UserValidator'
import Database from '@ioc:Adonis/Lucid/Database'
import { Attachment } from '@ioc:Adonis/Addons/AttachmentLite'

export default class UsersController {
  public async login({ request, auth, response }: HttpContextContract) {
    //Call method validate
    const { user } = await request.validate({ schema: LoginSchema })
    try {
      const token = await auth.attempt(user.email, user.password)

      const user_a = await User.findByOrFail('email', user.email)

      const user_to = await User.findOrFail(user_a.id)

      user_to.remember_me_token = token.token

      user_to.save()

      if (user_a.activate == false) {
        return response.badRequest({
          status: false,
          message: 'Tiene que validar',
        })
      } else if (user_a.activate == true) {
        return response.created({
          status: true,
          message: 'Inició sesión correctamente',
          token,
        })
      }
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Credenciales incorrectas',
        error: error,
      })
    }
  }

  public async loginToken({ request, response }: HttpContextContract) {
    //Call method validate
    const { user } = await request.validate({ schema: LoginTokeSchema })

    const user_a = await User.findByOrFail('id', user.id)

    const token = user_a.remember_me_token

    try {
      //const token = await auth.attempt(user_a.email)
      return response.created({
        status: true,
        message: 'Inició sesión correctamente',
        token: token,
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Credenciales incorrectas',
        error: error,
      })
    }
  }

  public async logout({ auth, response }: HttpContextContract) {
    try {
      await auth.use('api').revoke()

      return response.ok({ status: true, message: 'Ha cerrado sesión correctamente' })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al cerrar sesión, por favor intentelo nuevamente.',
        error: error,
      })
    }
  }

  //Function CREATE Default
  public async createUser({ request, response, auth }: HttpContextContract) {
    /*await bouncer
    .with('RolesPolicy')
    .authorize('rol', ['Admin', 'Moderador', 'Usuario', 'Veterinario', 'Fundación'])*/
    //Call method validate
    const { user: data } = await request.validate({ schema: CreateSchema })

    const userModel = new User()

    userModel.email = data.email
    userModel.activate = true
    userModel.password = data.password
    userModel.roles_id = data.idRol
    userModel.phone = data.phone
    userModel.name = data.name
    userModel.last_name = data.lastName

    try {
      await userModel.save()

      const user = await User.findByOrFail('email', userModel.email)
      const token = await auth.use('api').generate(user)

      const encrypted = Encryption.encrypt(token.tokenHash)
      //save user

      await Mail.use('sendgrid').send((message) => {
        message
          .from('noreply@pickpaw.cl', 'PickPaw')
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
        message: 'Se creo el Usuario',
        user: userModel.serialize(),
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'No se creo Usuario',
        error: error,
      })
    }
  }

  //Function GET id
  public async show({ params, response, auth, bouncer }: HttpContextContract) {
    await bouncer
      .with('RolPolicy')
      .authorize('rol', ['Admin', 'Moderador', 'Usuario', 'Veterinario', 'Fundación'])

    try {
      const user = await User.findOrFail(params.id === 0 ? auth.user?.id : params?.id)

      return response.ok({
        status: true,
        message: 'Usuario encontrado correctamente',
        user: user.serialize(),
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al obtener Usuario',
        error,
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
        message: 'Error al listar Usuario',
        error,
      })
    }
  }

  //Function Update Default
  public async update({ request, params, response, auth }: HttpContextContract) {
    const { user: data } = await request.validate({ schema: UpdateCreateSchema })

    const users = await User.findOrFail(params?.id === 0 ? auth.user?.id : params.id)

    users.email = data.email ?? users.email
    users.phone = data.phone ?? users.phone
    users.name = data.name ?? users.name
    users.last_name = data.lastName ?? users.last_name

    try {
      await users.save()

      return response.ok({
        status: true,
        message: 'Usuario actualizado correctamente',
        users: users.serialize(),
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al actualizar Usuario',
        error,
      })
    }
  }

  //Function DELETE Default
  public async destroy({ params, response }: HttpContextContract) {
    const user = await User.findOrFail(params?.id)

    try {
      await user.delete()

      return response.ok({
        status: true,
        message: 'Usuario eliminado correctamente ',
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al eliminar Usuario',
        error,
      })
    }
  }

  //Function Update image
  public async updateImagen({ request, response, params }: HttpContextContract) {
    const user = await User.findOrFail(params?.id)
    const photo = request.file('photo', { size: '2mb', extnames: ['jpg', 'png', 'webp'] })

    user.photo = Attachment.fromFile(photo!)

    try {
      await user.save()

      return response.ok({
        status: true,
        message: 'Imagen de Usuario actualizada correctamente',
        usuario: user.serialize(),
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al actualizar imagen de Usuario',
        error,
      })
    }
  }

  //Function update with token
  public async crateUserToken({ request, response }: HttpContextContract) {
    const photo = request.file('photo')!
    const phone = request.input('phone')
    const token = request.input('token')

    try {
      const decodedToken: string | null = Encryption.decrypt(token)

      if (decodedToken) {
        const isValidToken = await Database.query()
          .from('api_tokens')
          .select('token', 'user_id')
          .where('token', decodedToken)

        if (!isValidToken.length) throw new Error('')

        const usuario = await User.findByOrFail('id', isValidToken?.[0].user_id)

        usuario.photo = await Attachment.fromFile(photo)

        usuario.phone = phone

        await usuario.save()

        await Database.query().from('api_tokens').where('token', decodedToken).delete()
      } else {
        throw new Error('')
      }

      return response.ok({ status: true })
    } catch (error) {
      return response.badRequest({ status: false })
    }
  }

  //Function update password with token
  public async createNewPasswordToken({ request, response }: HttpContextContract) {
    const { passwordNew, token } = await request.validate({
      schema: createPasswordTokenSchema,
    })

    try {
      const decodedToken: string | null = Encryption.decrypt(token)

      if (decodedToken) {
        const isValidToken = await Database.query()
          .from('api_tokens')
          .select('token', 'user_id')
          .where('token', decodedToken)

        if (!isValidToken.length) throw new Error('')

        const usuario = await User.findByOrFail('id', isValidToken?.[0].user_id)

        usuario.password = passwordNew

        await usuario.save()
      } else {
        throw new Error('')
      }

      return response.ok({ status: true })
    } catch (error) {
      return response.badRequest({ status: false })
    }
  }
}
