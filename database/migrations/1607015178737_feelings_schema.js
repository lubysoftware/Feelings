'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FeelingsSchema extends Schema {
  up () {
    this.create('feelings', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users').onUpdate('CASCADE').onDelete('CASCADE')
      table.string('message')
      table.string('feel')
      table.timestamps()
    })
  }

  down () {
    this.drop('feelings')
  }
}

module.exports = FeelingsSchema
