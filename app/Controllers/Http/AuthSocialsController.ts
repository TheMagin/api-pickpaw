import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Users from 'App/Models/Users'

export default class AuthSocialsController {
  public async redirect({ ally }: HttpContextContract) {
    return ally.use('google').redirect()
  }

  public async call({ ally, auth, response }: HttpContextContract) {
    const google = ally.use('google')
    const googleUser = await google.user()
    //const token = googleUser.token.token
    try {
      const user = await Users.firstOrCreate(
        {
          email: googleUser.email,
        },
        {
          name: googleUser.name,

          last_name: googleUser.original.family_name,
          activate: false,
        }
      )
      const token = await auth.use('api').authenticate()

      const token2 = await auth.use('api').login(user)

      //const userModel = await Users.findByOrFail('email', user.email)

      return response.created({
        status: true,
        message: 'Inició sesión correctamente',
        token: token2.token,
      })
    } catch (error) {
      return response.badRequest({ status: false })
    }
  }
}
