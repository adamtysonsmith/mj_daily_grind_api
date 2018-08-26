exports.up = function(knex, Promise) {
  return knex.schema.alterTable('drinks_consumed', table => {
    table.float('drink_qty').defaultTo(1).alter()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.alterTable('drinks_consumed', table => {
    table.integer('drink_qty').defaultTo(1).alter()
  })
};
