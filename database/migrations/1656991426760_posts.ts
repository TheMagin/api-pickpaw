import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'posts'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('title').notNullable()
      table.string('description').notNullable()
      table.string('date_expire').notNullable()
      table.string('status').notNullable()
      table.boolean('post_state').notNullable()
      table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE')
      table.integer('pet_id').unsigned().references('id').inTable('pets').onDelete('CASCADE')
      table
        .integer('type_post_id')
        .unsigned()
        .references('id')
        .inTable('type_posts')
        .onDelete('CASCADE')

      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').defaultTo(this.now())
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
