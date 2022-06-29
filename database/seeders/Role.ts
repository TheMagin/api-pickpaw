import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Roles from 'App/Models/Role'
export default class RoleSeeder extends BaseSeeder {
  public async run() {
    await Roles.updateOrCreateMany('id', [
      {
        id: 1,
        name: 'Admin',
      },
      {
        id: 2,
        name: 'Moderador',
      },
      {
        id: 3,
        name: 'Usuario',
      },
      {
        id: 4,
        name: 'Veterinario',
      },
    ])
  }
}
