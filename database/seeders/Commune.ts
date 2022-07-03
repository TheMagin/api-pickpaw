import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Commune from 'App/Models/Commune'

export default class extends BaseSeeder {
  public async run() {
    await Commune.updateOrCreateMany('id', [
      {
        name: 'Algarrobo',
        region_id: 5,
      },
      {
        name: 'Alhué',
        region_id: 13,
      },
      {
        name: 'Alto Biobío',

        region_id: 8,
      },
      {
        name: 'Alto del Carmen',

        region_id: 3,
      },
      {
        name: 'Alto Hospicio',

        region_id: 1,
      },
      {
        name: 'Ancud',

        region_id: 10,
      },
      {
        name: 'Andacollo',

        region_id: 4,
      },
      {
        name: 'Angol',

        region_id: 9,
      },
      {
        name: 'Antártica',

        region_id: 12,
      },
      {
        name: 'Antofagasta',

        region_id: 2,
      },
      {
        name: 'Antuco',

        region_id: 8,
      },
      {
        name: 'Arauco',

        region_id: 8,
      },
      {
        name: 'Arica',

        region_id: 15,
      },
      {
        name: 'Aysén',

        region_id: 11,
      },
      {
        name: 'Buin',

        region_id: 13,
      },
      {
        name: 'Bulnes',

        region_id: 16,
      },
      {
        name: 'Cabildo',

        region_id: 5,
      },
      {
        name: 'Cabo de Hornos',

        region_id: 12,
      },
      {
        name: 'Cabrero',

        region_id: 8,
      },
      {
        name: 'Calama',

        region_id: 2,
      },
      {
        name: 'Calbuco',

        region_id: 10,
      },
      {
        name: 'Caldera',

        region_id: 3,
      },
      {
        name: 'Calera',

        region_id: 5,
      },
      {
        name: 'Calera de Tango',

        region_id: 13,
      },
      {
        name: 'Calle Larga',

        region_id: 5,
      },
      {
        name: 'Camarones',

        region_id: 15,
      },
      {
        name: 'Camiña',

        region_id: 1,
      },
      {
        name: 'Canela',

        region_id: 4,
      },
      {
        name: 'Cañete',

        region_id: 8,
      },
      {
        name: 'Carahue',

        region_id: 9,
      },
      {
        name: 'Cartagena',

        region_id: 5,
      },
      {
        name: 'Casablanca',

        region_id: 5,
      },
      {
        name: 'Castro',

        region_id: 10,
      },
      {
        name: 'Catemu',

        region_id: 5,
      },
      {
        name: 'Cauquenes',

        region_id: 7,
      },
      {
        name: 'Cerrillos',

        region_id: 13,
      },
      {
        name: 'Cerro Navia',

        region_id: 13,
      },
      {
        name: 'Chaitén',

        region_id: 10,
      },
      {
        name: 'Chañaral',

        region_id: 3,
      },
      {
        name: 'Chanco',

        region_id: 7,
      },
      {
        name: 'Chépica',

        region_id: 6,
      },
      {
        name: 'Chiguayante',

        region_id: 8,
      },
      {
        name: 'Chile Chico',

        region_id: 11,
      },
      {
        name: 'Chillán',

        region_id: 16,
      },
      {
        name: 'Chillán Viejo',

        region_id: 16,
      },
      {
        name: 'Chimbarongo',

        region_id: 6,
      },
      {
        name: 'Cholchol',

        region_id: 9,
      },
      {
        name: 'Chonchi',

        region_id: 10,
      },
      {
        name: 'Cisnes',

        region_id: 11,
      },
      {
        name: 'Cobquecura',

        region_id: 16,
      },
      {
        name: 'Cochamó',

        region_id: 10,
      },
      {
        name: 'Cochrane',

        region_id: 11,
      },
      {
        name: 'Codegua',

        region_id: 6,
      },
      {
        name: 'Coelemu',

        region_id: 16,
      },
      {
        name: 'Coihaique',

        region_id: 11,
      },
      {
        name: 'Coihueco',

        region_id: 16,
      },
      {
        name: 'Coinco',

        region_id: 6,
      },
      {
        name: 'Colbún',

        region_id: 7,
      },
      {
        name: 'Colchane',

        region_id: 1,
      },
      {
        name: 'Colina',

        region_id: 13,
      },
      {
        name: 'Collipulli',

        region_id: 9,
      },
      {
        name: 'Coltauco',

        region_id: 6,
      },
      {
        name: 'Combarbalá',

        region_id: 4,
      },
      {
        name: 'Concepción',

        region_id: 8,
      },
      {
        name: 'Conchalí',

        region_id: 13,
      },
      {
        name: 'Concón',

        region_id: 5,
      },
      {
        name: 'Constitución',

        region_id: 7,
      },
      {
        name: 'Contulmo',

        region_id: 8,
      },
      {
        name: 'Copiapó',

        region_id: 3,
      },
      {
        name: 'Coquimbo',

        region_id: 4,
      },
      {
        name: 'Coronel',

        region_id: 8,
      },
      {
        name: 'Corral',

        region_id: 14,
      },
      {
        name: 'Cunco',

        region_id: 9,
      },
      {
        name: 'Curacautín',

        region_id: 9,
      },
      {
        name: 'Curacaví',

        region_id: 13,
      },
      {
        name: 'Curaco de Vélez',

        region_id: 10,
      },
      {
        name: 'Curanilahue',

        region_id: 8,
      },
      {
        name: 'Curarrehue',

        region_id: 9,
      },
      {
        name: 'Curepto',

        region_id: 7,
      },
      {
        name: 'Curicó',

        region_id: 7,
      },
      {
        name: 'Dalcahue',

        region_id: 10,
      },
      {
        name: 'Diego de Almagro',

        region_id: 3,
      },
      {
        name: 'Doñihue',

        region_id: 6,
      },
      {
        name: 'El Bosque',

        region_id: 13,
      },
      {
        name: 'El Carmen',

        region_id: 16,
      },
      {
        name: 'El Monte',

        region_id: 13,
      },
      {
        name: 'El Quisco',

        region_id: 5,
      },
      {
        name: 'El Tabo',

        region_id: 5,
      },
      {
        name: 'Empedrado',

        region_id: 7,
      },
      {
        name: 'Ercilla',

        region_id: 9,
      },
      {
        name: 'Estación Central',

        region_id: 13,
      },
      {
        name: 'Florida',

        region_id: 8,
      },
      {
        name: 'Freire',

        region_id: 9,
      },
      {
        name: 'Freirina',

        region_id: 3,
      },
      {
        name: 'Fresia',

        region_id: 10,
      },
      {
        name: 'Frutillar',

        region_id: 10,
      },
      {
        name: 'Futaleufú',

        region_id: 10,
      },
      {
        name: 'Futrono',

        region_id: 14,
      },
      {
        name: 'Galvarino',

        region_id: 9,
      },
      {
        name: 'General Lagos',

        region_id: 15,
      },
      {
        name: 'Gorbea',

        region_id: 9,
      },
      {
        name: 'Graneros',

        region_id: 6,
      },
      {
        name: 'Guaitecas',

        region_id: 11,
      },
      {
        name: 'Hijuelas',

        region_id: 5,
      },
      {
        name: 'Hualaihué',

        region_id: 10,
      },
      {
        name: 'Hualañé',

        region_id: 7,
      },
      {
        name: 'Hualpén',

        region_id: 8,
      },
      {
        name: 'Hualqui',

        region_id: 8,
      },
      {
        name: 'Huara',

        region_id: 1,
      },
      {
        name: 'Huasco',

        region_id: 3,
      },
      {
        name: 'Huechuraba',

        region_id: 13,
      },
      {
        name: 'Illapel',

        region_id: 4,
      },
      {
        name: 'Independencia',

        region_id: 13,
      },
      {
        name: 'Iquique',

        region_id: 1,
      },
      {
        name: 'Isla de Maipo',

        region_id: 13,
      },
      {
        name: 'Isla de Pascua',

        region_id: 5,
      },
      {
        name: 'Juan Fernández',

        region_id: 5,
      },
      {
        name: 'La Cisterna',

        region_id: 13,
      },
      {
        name: 'La Cruz',

        region_id: 5,
      },
      {
        name: 'La Estrella',

        region_id: 6,
      },
      {
        name: 'La Florida',

        region_id: 13,
      },
      {
        name: 'La Granja',

        region_id: 13,
      },
      {
        name: 'La Higuera',

        region_id: 4,
      },
      {
        name: 'La Ligua',

        region_id: 5,
      },
      {
        name: 'La Pintana',

        region_id: 13,
      },
      {
        name: 'La Reina',

        region_id: 13,
      },
      {
        name: 'La Serena',

        region_id: 4,
      },
      {
        name: 'La Unión',

        region_id: 14,
      },
      {
        name: 'Lago Ranco',

        region_id: 14,
      },
      {
        name: 'Lago Verde',

        region_id: 11,
      },
      {
        name: 'Laguna Blanca',

        region_id: 12,
      },
      {
        name: 'Laja',

        region_id: 8,
      },
      {
        name: 'Lampa',

        region_id: 13,
      },
      {
        name: 'Lanco',

        region_id: 14,
      },
      {
        name: 'Las Cabras',

        region_id: 6,
      },
      {
        name: 'Las Condes',

        region_id: 13,
      },
      {
        name: 'Lautaro',

        region_id: 9,
      },
      {
        name: 'Lebu',

        region_id: 8,
      },
      {
        name: 'Licantén',

        region_id: 7,
      },
      {
        name: 'Limache',

        region_id: 5,
      },
      {
        name: 'Linares',

        region_id: 7,
      },
      {
        name: 'Litueche',

        region_id: 6,
      },
      {
        name: 'Llaillay',

        region_id: 5,
      },
      {
        name: 'Llanquihue',

        region_id: 10,
      },
      {
        name: 'Lo Barnechea',

        region_id: 13,
      },
      {
        name: 'Lo Espejo',

        region_id: 13,
      },
      {
        name: 'Lo Prado',

        region_id: 13,
      },
      {
        name: 'Lolol',

        region_id: 6,
      },
      {
        name: 'Loncoche',

        region_id: 9,
      },
      {
        name: 'Longaví',

        region_id: 7,
      },
      {
        name: 'Lonquimay',

        region_id: 9,
      },
      {
        name: 'Los Álamos',

        region_id: 8,
      },
      {
        name: 'Los Andes',

        region_id: 5,
      },
      {
        name: 'Los Ángeles',

        region_id: 8,
      },
      {
        name: 'Los Lagos',

        region_id: 14,
      },
      {
        name: 'Los Muermos',

        region_id: 10,
      },
      {
        name: 'Los Sauces',

        region_id: 9,
      },
      {
        name: 'Los Vilos',

        region_id: 4,
      },
      {
        name: 'Lota',

        region_id: 8,
      },
      {
        name: 'Lumaco',

        region_id: 9,
      },
      {
        name: 'Machalí',

        region_id: 6,
      },
      {
        name: 'Macul',

        region_id: 13,
      },
      {
        name: 'Máfil',

        region_id: 14,
      },
      {
        name: 'Maipú',

        region_id: 13,
      },
      {
        name: 'Malloa',

        region_id: 6,
      },
      {
        name: 'Marchihue',

        region_id: 6,
      },
      {
        name: 'María Elena',

        region_id: 2,
      },
      {
        name: 'María Pinto',

        region_id: 13,
      },
      {
        name: 'Mariquina',

        region_id: 14,
      },
      {
        name: 'Maule',

        region_id: 7,
      },
      {
        name: 'Maullín',

        region_id: 10,
      },
      {
        name: 'Mejillones',

        region_id: 2,
      },
      {
        name: 'Melipeuco',

        region_id: 9,
      },
      {
        name: 'Melipilla',

        region_id: 13,
      },
      {
        name: 'Molina',

        region_id: 7,
      },
      {
        name: 'Monte Patria',

        region_id: 4,
      },
      {
        name: 'Mostazal',

        region_id: 6,
      },
      {
        name: 'Mulchén',

        region_id: 8,
      },
      {
        name: 'Nacimiento',

        region_id: 8,
      },
      {
        name: 'Nancagua',

        region_id: 6,
      },
      {
        name: 'Natales',

        region_id: 12,
      },
      {
        name: 'Navidad',

        region_id: 6,
      },
      {
        name: 'Negrete',

        region_id: 8,
      },
      {
        name: 'Ninhue',

        region_id: 16,
      },
      {
        name: 'Ñiquén',

        region_id: 16,
      },
      {
        name: 'Nogales',

        region_id: 5,
      },
      {
        name: 'Nueva Imperial',

        region_id: 9,
      },
      {
        name: 'Ñuñoa',

        region_id: 13,
      },
      {
        name: 'Olivar',

        region_id: 6,
      },
      {
        name: 'Ollagüe',

        region_id: 2,
      },
      {
        name: 'Olmué',

        region_id: 5,
      },
      {
        name: 'Osorno',

        region_id: 10,
      },
      {
        name: 'Ovalle',

        region_id: 4,
      },
      {
        name: 'O’Higgins',

        region_id: 11,
      },
      {
        name: 'Padre Hurtado',

        region_id: 13,
      },
      {
        name: 'Padre las Casas',

        region_id: 9,
      },
      {
        name: 'Paiguano',

        region_id: 4,
      },
      {
        name: 'Paillaco',

        region_id: 14,
      },
      {
        name: 'Paine',

        region_id: 13,
      },
      {
        name: 'Palena',

        region_id: 10,
      },
      {
        name: 'Palmilla',

        region_id: 6,
      },
      {
        name: 'Panguipulli',

        region_id: 14,
      },
      {
        name: 'Panquehue',

        region_id: 5,
      },
      {
        name: 'Papudo',

        region_id: 5,
      },
      {
        name: 'Paredones',

        region_id: 6,
      },
      {
        name: 'Parral',

        region_id: 7,
      },
      {
        name: 'Pedro Aguirre Cerda',

        region_id: 13,
      },
      {
        name: 'Pelarco',

        region_id: 7,
      },
      {
        name: 'Pelluhue',

        region_id: 7,
      },
      {
        name: 'Pemuco',

        region_id: 16,
      },
      {
        name: 'Peñaflor',

        region_id: 13,
      },
      {
        name: 'Peñalolén',

        region_id: 13,
      },
      {
        name: 'Pencahue',

        region_id: 7,
      },
      {
        name: 'Penco',

        region_id: 8,
      },
      {
        name: 'Peralillo',

        region_id: 6,
      },
      {
        name: 'Perquenco',

        region_id: 9,
      },
      {
        name: 'Petorca',

        region_id: 5,
      },
      {
        name: 'Peumo',

        region_id: 6,
      },
      {
        name: 'Pica',

        region_id: 1,
      },
      {
        name: 'Pichidegua',

        region_id: 6,
      },
      {
        name: 'Pichilemu',

        region_id: 6,
      },
      {
        name: 'Pinto',

        region_id: 16,
      },
      {
        name: 'Pirque',

        region_id: 13,
      },
      {
        name: 'Pitrufquén',

        region_id: 9,
      },
      {
        name: 'Placilla',

        region_id: 6,
      },
      {
        name: 'Portezuelo',

        region_id: 16,
      },
      {
        name: 'Porvenir',

        region_id: 12,
      },
      {
        name: 'Pozo Almonte',

        region_id: 1,
      },
      {
        name: 'Primavera',

        region_id: 12,
      },
      {
        name: 'Providencia',

        region_id: 13,
      },
      {
        name: 'Puchuncaví',

        region_id: 5,
      },
      {
        name: 'Pucón',

        region_id: 9,
      },
      {
        name: 'Pudahuel',

        region_id: 13,
      },
      {
        name: 'Puente Alto',

        region_id: 13,
      },
      {
        name: 'Puerto Montt',

        region_id: 10,
      },
      {
        name: 'Puerto Octay',

        region_id: 10,
      },
      {
        name: 'Puerto Varas',

        region_id: 10,
      },
      {
        name: 'Pumanque',

        region_id: 6,
      },
      {
        name: 'Punitaqui',

        region_id: 4,
      },
      {
        name: 'Punta Arenas',

        region_id: 12,
      },
      {
        name: 'Puqueldón',

        region_id: 10,
      },
      {
        name: 'Purén',

        region_id: 9,
      },
      {
        name: 'Purranque',

        region_id: 10,
      },
      {
        name: 'Putaendo',

        region_id: 5,
      },
      {
        name: 'Putre',

        region_id: 15,
      },
      {
        name: 'Puyehue',

        region_id: 10,
      },
      {
        name: 'Queilén',

        region_id: 10,
      },
      {
        name: 'Quellón',

        region_id: 10,
      },
      {
        name: 'Quemchi',

        region_id: 10,
      },
      {
        name: 'Quilaco',

        region_id: 8,
      },
      {
        name: 'Quilicura',

        region_id: 13,
      },
      {
        name: 'Quilleco',

        region_id: 8,
      },
      {
        name: 'Quillón',

        region_id: 16,
      },
      {
        name: 'Quillota',

        region_id: 5,
      },
      {
        name: 'Quilpué',

        region_id: 5,
      },
      {
        name: 'Quinchao',

        region_id: 10,
      },
      {
        name: 'Quinta de Tilcoco',

        region_id: 6,
      },
      {
        name: 'Quinta Normal',

        region_id: 13,
      },
      {
        name: 'Quintero',

        region_id: 5,
      },
      {
        name: 'Quirihue',

        region_id: 16,
      },
      {
        name: 'Rancagua',

        region_id: 6,
      },
      {
        name: 'Ránquil',

        region_id: 16,
      },
      {
        name: 'Rauco',

        region_id: 7,
      },
      {
        name: 'Recoleta',

        region_id: 13,
      },
      {
        name: 'Renaico',

        region_id: 9,
      },
      {
        name: 'Renca',

        region_id: 13,
      },
      {
        name: 'Rengo',

        region_id: 6,
      },
      {
        name: 'Requínoa',

        region_id: 6,
      },
      {
        name: 'Retiro',

        region_id: 7,
      },
      {
        name: 'Rinconada',

        region_id: 5,
      },
      {
        name: 'Río Bueno',

        region_id: 14,
      },
      {
        name: 'Río Claro',

        region_id: 7,
      },
      {
        name: 'Río Hurtado',

        region_id: 4,
      },
      {
        name: 'Río Ibáñez',

        region_id: 11,
      },
      {
        name: 'Río Negro',

        region_id: 10,
      },
      {
        name: 'Río Verde',

        region_id: 12,
      },
      {
        name: 'Romeral',

        region_id: 7,
      },
      {
        name: 'Saavedra',

        region_id: 9,
      },
      {
        name: 'Sagrada Familia',

        region_id: 7,
      },
      {
        name: 'Salamanca',

        region_id: 4,
      },
      {
        name: 'San Antonio',

        region_id: 5,
      },
      {
        name: 'San Bernardo',

        region_id: 13,
      },
      {
        name: 'San Carlos',

        region_id: 16,
      },
      {
        name: 'San Clemente',

        region_id: 7,
      },
      {
        name: 'San Esteban',

        region_id: 5,
      },
      {
        name: 'San Fabián',

        region_id: 16,
      },
      {
        name: 'San Felipe',

        region_id: 5,
      },
      {
        name: 'San Fernando',

        region_id: 6,
      },
      {
        name: 'San Gregorio',

        region_id: 12,
      },
      {
        name: 'San Ignacio',

        region_id: 16,
      },
      {
        name: 'San Javier',

        region_id: 7,
      },
      {
        name: 'San Joaquín',

        region_id: 13,
      },
      {
        name: 'San José de Maipo',

        region_id: 13,
      },
      {
        name: 'San Juan de la Costa',

        region_id: 10,
      },
      {
        name: 'San Miguel',

        region_id: 13,
      },
      {
        name: 'San Nicolás',

        region_id: 16,
      },
      {
        name: 'San Pablo',

        region_id: 10,
      },
      {
        name: 'San Pedro',

        region_id: 13,
      },
      {
        name: 'San Pedro de Atacama',

        region_id: 0,
      },
      {
        name: 'San Pedro de la Paz',

        region_id: 8,
      },
      {
        name: 'San Rafael',

        region_id: 7,
      },
      {
        name: 'San Ramón',

        region_id: 13,
      },
      {
        name: 'San Rosendo',

        region_id: 8,
      },
      {
        name: 'San Vicente',

        region_id: 6,
      },
      {
        name: 'Santa Bárbara',

        region_id: 8,
      },
      {
        name: 'Santa Cruz',

        region_id: 6,
      },
      {
        name: 'Santa Juana',

        region_id: 8,
      },
      {
        name: 'Santa María',

        region_id: 5,
      },
      {
        name: 'Santiago Centro',

        region_id: 13,
      },
      {
        name: 'Santo Domingo',

        region_id: 5,
      },
      {
        name: 'Sierra Gorda',

        region_id: 2,
      },
      {
        name: 'Talagante',

        region_id: 13,
      },
      {
        name: 'Talca',

        region_id: 7,
      },
      {
        name: 'Talcahuano',

        region_id: 8,
      },
      {
        name: 'Taltal',

        region_id: 2,
      },
      {
        name: 'Temuco',

        region_id: 9,
      },
      {
        name: 'Teno',

        region_id: 7,
      },
      {
        name: 'Teodoro Schmidt',

        region_id: 9,
      },
      {
        name: 'Tierra Amarilla',

        region_id: 3,
      },
      {
        name: 'Tiltil',

        region_id: 13,
      },
      {
        name: 'Timaukel',

        region_id: 12,
      },
      {
        name: 'Tirúa',

        region_id: 8,
      },
      {
        name: 'Tocopilla',

        region_id: 2,
      },
      {
        name: 'Toltén',

        region_id: 9,
      },
      {
        name: 'Tomé',

        region_id: 8,
      },
      {
        name: 'Torres del Paine',

        region_id: 12,
      },
      {
        name: 'Tortel',

        region_id: 11,
      },
      {
        name: 'Traiguén',

        region_id: 9,
      },
      {
        name: 'Treguaco',

        region_id: 16,
      },
      {
        name: 'Tucapel',

        region_id: 8,
      },
      {
        name: 'Valdivia',

        region_id: 14,
      },
      {
        name: 'Vallenar',

        region_id: 3,
      },
      {
        name: 'Valparaíso',

        region_id: 5,
      },
      {
        name: 'Vichuquén',

        region_id: 7,
      },
      {
        name: 'Victoria',

        region_id: 9,
      },
      {
        name: 'Vicuña',

        region_id: 4,
      },
      {
        name: 'Vilcún',

        region_id: 9,
      },
      {
        name: 'Villa Alegre',

        region_id: 7,
      },
      {
        name: 'Villa Alemana',

        region_id: 5,
      },
      {
        name: 'Villarrica',

        region_id: 9,
      },
      {
        name: 'Viña del Mar',

        region_id: 5,
      },
      {
        name: 'Vitacura',

        region_id: 13,
      },
      {
        name: 'Yerbas Buenas',

        region_id: 7,
      },
      {
        name: 'Yumbel',

        region_id: 8,
      },
      {
        name: 'Yungay',

        region_id: 16,
      },
      {
        name: 'Zapallar',

        region_id: 5,
      },
    ])
  }
}
