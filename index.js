// environment config
require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const initRoutes = require('./routes')
const port = process.env.PORT || '3000'

const corsOptions = {
  origin: function (origin, callback) {
    if (origin === process.env.APP_URL) callback(null, true)
    else callback(new Error('Not allowed by CORS'))
  }
}

// init express app & middleware
const app = express()
app.use(bodyParser.json())
app.use(cors(corsOptions))

// register routes
initRoutes(app)

// server
app.listen(port, () => console.log(`Listening on Port: ${port}`))
