exports.up = function(knex, Promise) {
  return knex.schema.createTable('drinks_consumed', table => {
    table.increments()
    table.timestamp('timestamp').defaultTo(knex.fn.now())
    table.integer('drink_qty').defaultTo(1)
    table.integer('drink_id').unsigned().notNullable()
    table.foreign('drink_id').references('id').inTable('drinks')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('drinks_consumed')
};