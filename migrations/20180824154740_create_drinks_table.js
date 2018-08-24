exports.up = function(knex, Promise) {
  return knex.schema.createTable('drinks', table => {
    table.increments()
    table.string('name').notNullable()
    table.string('icon').notNullable()
    table.integer('servings_per_drink').notNullable()
    table.integer('caffeine_mg_per_serving').notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('drinks')
};
