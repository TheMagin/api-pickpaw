import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Region from 'App/Models/Region'

export default class extends BaseSeeder {
  public async run() {
    await Region.updateOrCreateMany('id', [
      {
        id: 15,
        name: 'Arica y Parinacota',
      },
      {
        id: 1,

        name: 'Tarapacá',
      },
      {
        id: 2,
        name: 'Antofagasta',
      },
      {
        id: 3,
        name: 'Atacama',
      },
      {
        id: 4,
        name: 'Coquimbo',
      },
      {
        id: 5,

        name: 'Valparaíso',
      },
      {
        id: 13,
        name: 'Metropolitana de Santiago',
      },
      {
        id: 6,
        name: 'Del Libertador Gral. Bernardo O’Higgins',
      },
      {
        id: 7,
        name: 'Del Maule',
      },
      {
        id: 8,
        name: 'Del Biobío',
      },
      {
        id: 9,
        name: 'De la Araucanía',
      },
      {
        id: 14,
        name: 'De los Ríos',
      },
      {
        id: 10,
        name: 'De los Lagos',
      },
      {
        id: 11,
        name: 'Aysén del Gral. Carlos Ibáñez del Campo',
      },
      {
        id: 12,
        name: 'Magallanes y de la Antártica Chilena',
      },
      {
        id: 16,
        name: 'Ñuble',
      },
    ])
  }
}
