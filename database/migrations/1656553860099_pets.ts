import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'pets'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('name').notNullable()
      table.string('photo').nullable()
      table.integer('age').nullable()
      table.string('gender').notNullable()
      table.string('additional_information').nullable()
      table.string('pet_breed').notNullable()
      table
        .integer('pet_type_id')
        .unsigned()
        .references('id')
        .inTable('pet_types')
        .onDelete('CASCADE')

      table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').defaultTo(this.now())
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
