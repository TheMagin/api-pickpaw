import Bouncer, { BasePolicy } from '@ioc:Adonis/Addons/Bouncer'
import Users from 'App/Models/Users'

type UserRoles = 'Admin' | 'Moderador' | 'Usuario' | 'Veterinario' | 'Fundación'

export default class RolPolicy extends BasePolicy {
  public async rol(user: Users, roles: Array<UserRoles>) {
    await user.load('rol')

    if (roles.includes(user.rol.name as UserRoles)) {
      return true
    }

    return Bouncer.deny('No tienes permiso para acceder a este recurso', 403)
  }
}
