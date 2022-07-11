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
        }
      )

      await auth.use('api').login(user)
      return response.redirect(`https://dev.pickpaw.cl/explorer?t=${token}`)
    } catch (error) {
      return response.badRequest({ status: false })
    }
  }
}
