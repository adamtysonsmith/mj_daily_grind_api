const {
  Drinks,
  DrinksConsumed,
} = require('./controllers')

module.exports = (app) => {
  app.get(`/drinks`, Drinks.get)
  app.post(`/drinks`, Drinks.post)

  app.get(`/drinks-consumed`, DrinksConsumed.get)
  app.post(`/drinks-consumed`, DrinksConsumed.post)
}
