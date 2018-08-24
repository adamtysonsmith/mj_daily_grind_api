const { selectAllFromTable, insertIntoTable } = require('./utils')

const selectAll = selectAllFromTable('drinks')
const insert = insertIntoTable('drinks')

module.exports = {
  get: (req, res) => selectAll(res),
  post: (req, res) => insert(res, req.body),
}
