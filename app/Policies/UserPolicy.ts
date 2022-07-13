import Bouncer, { BasePolicy } from '@ioc:Adonis/Addons/Bouncer'
import Users from 'App/Models/Users'

export default class UserPolicy extends BasePolicy {
  public async isOwner(user: Users, users?: Users) {
    const isAdmin = user.roles_id === 1
    const ownUser = user.id === users?.id

    if (isAdmin || ownUser) {
      return true
    } else {
      Bouncer.deny('No tienes permiso para hacer esto', 403)
    }
  }
}
