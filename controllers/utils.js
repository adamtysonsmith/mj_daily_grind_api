const knex = require('../knex')

const selectAllFromTable = (table) => (res) => {
  return knex
    .select()
    .from(table)
    .then(data => res.status(200).send(data))
    .catch(error => res.status(500).send({ status: 500, error }))
}

const insertIntoTable = (table) => (res, body) => {
  return knex(table)
    .insert(body)
    .then(() => res.status(200).send())
    .catch(error => {
      const status = error.code === 'ER_NO_DEFAULT_FOR_FIELD'
        ? 400
        : 500
      
      return res
        .status(status)
        .send({ status, error: error.sqlMessage })
    })
}

module.exports = {
  selectAllFromTable,
  insertIntoTable,
}