import Bouncer, { BasePolicy } from '@ioc:Adonis/Addons/Bouncer'
import Pet from 'App/Models/Pet'
import Users from 'App/Models/Users'

export default class PetPolicy extends BasePolicy {
    public async isOwner(pet: Pet, user?: Users) {
        const ownUser = pet.user_id === user?.id
        const isAdmin = user?.roles_id === 1

        if (ownUser || isAdmin) {
            return true
        } else {
            Bouncer.deny('No tienes permiso para hacer esto', 403)
        }
    }
}
