import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import TypeSocialMedia from 'App/Models/TypeSocialMedia'

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    await TypeSocialMedia.updateOrCreateMany('id', [
      {
        id: 1,
        name: 'facebook',
      },
      {
        id: 2,
        name: 'twitter',
      },
      {
        id: 3,
        name: 'instagram',
      },
    ])
  }
}
