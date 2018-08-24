exports.seed = function(knex, Promise) {
  return knex('drinks')
    .del()
    .then(() => {
      return knex('drinks').insert([
        { name: 'Monster Ultra Sunrise', icon: '', servings_per_drink: 2, caffeine_mg_per_serving: 75 },
        { name: 'Black Coffee', icon: '', servings_per_drink: 1, caffeine_mg_per_serving: 95 },
        { name: 'Americano', icon: '', servings_per_drink: 1, caffeine_mg_per_serving: 77 },
        { name: 'Sugar free NOS', icon: '', servings_per_drink: 2, caffeine_mg_per_serving: 130 },
        { name: '5 Hour Energy ', icon: '', servings_per_drink: 1, caffeine_mg_per_serving: 200 },
      ]);
    });
};
