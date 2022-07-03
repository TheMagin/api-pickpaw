import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import PetType from 'App/Models/PetType'

export default class extends BaseSeeder {
  public async run() {
    await PetType.updateOrCreateMany('id', [
      {
        id: 1,
        name: 'Perro',
      },
      {
        id: 2,
        name: 'Gato',
      },
      {
        id: 3,
        name: 'Conejo',
      },
      {
        id: 4,
        name: 'Hamster',
      },
      {
        id: 5,
        name: 'Pájaro',
      },
    ])
  }
}
