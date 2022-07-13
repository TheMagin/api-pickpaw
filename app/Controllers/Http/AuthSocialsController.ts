import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Users from 'App/Models/Users'

export default class AuthSocialsController {
  public async redirect({ ally }: HttpContextContract) {
    return ally.use('google').redirect()
  }

  public async call({ ally, auth, response }: HttpContextContract) {
    const google = ally.use('google')
    const googleUser = await google.user()
    const token = googleUser.token.token
    try {
      const user = await Users.firstOrCreate(
        {
          email: googleUser.email,
        },
        {
          name: googleUser.name,
          remember_me_token: googleUser.token.token,
          last_name: googleUser.original.family_name,
          activate: true,
        }
      )

      await auth.use('api').login(user)

      const userModel = await Users.findByOrFail('email', user.email)

      if (userModel.activate == false) {
        return response.redirect(`https://dev.pickpaw.cl/register/createProfile?t=${token}`)
      } else if (userModel.activate == true) {
        return response.redirect(`https://dev.pickpaw.cl/explorer?t=${token}`)
      }
    } catch (error) {
      return response.badRequest({ status: false })
    }
  }
}
