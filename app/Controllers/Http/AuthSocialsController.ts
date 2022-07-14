import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Users from 'App/Models/Users'

export default class AuthSocialsController {
  public async redirect({ ally }: HttpContextContract) {
    return ally.use('google').redirect()
  }

  public async call({ ally, auth, response }: HttpContextContract) {
    const google = ally.use('google')
    const googleUser = await google.user()

    try {
      const user = await Users.firstOrCreate(
        {
          email: googleUser.email,
        },
        {
          name: googleUser.name,
          remember_me_token: googleUser.token.token,
          last_name: googleUser.original.family_name,
          activate: false,
        }
      )

      await auth.use('api').login(user)

      const token = await auth.use('api').login(user)
      //const userModel = await Users.findByOrFail('email', user.email)

      return response.redirect(`https://dev.pickpaw.cl/explorer?t=${token.token}`)
    } catch (error) {
      return response.badRequest({ status: false })
    }
  }
}
