// environment config
require('dotenv').config()

// init express app
const express = require('express')
const bodyParser = require('body-parser')
const initRoutes = require('./routes')
const port = process.env.PORT || '3000'

const app = express()
app.use(bodyParser.json())

// register routes
initRoutes(app)

// server
app.listen(port, () => console.log(`Listening on Port: ${port}`))
