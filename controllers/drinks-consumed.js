const { selectAllFromTable, insertIntoTable } = require('./utils')

const selectAll = selectAllFromTable('drinks_consumed')
const insert = insertIntoTable('drinks_consumed')

module.exports = {
  get: (req, res) => selectAll(res),
  post: (req, res) => insert(res, req.body),
}
