import Bouncer, { BasePolicy } from '@ioc:Adonis/Addons/Bouncer'
import Users from 'App/Models/Users'
import Address from 'App/Models/Address'


export default class AddressPolicy extends BasePolicy {
    public async isOwner(address: Address, user?: Users) {
        const ownUser = address.user_id === user?.id
        const isAdmin = user?.roles_id === 1

        if (ownUser || isAdmin) {
            return true
        } else {
            Bouncer.deny('No tienes permiso para hacer esto', 403)
        }
    }
}
