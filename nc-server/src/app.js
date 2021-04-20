const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const { sequelize } = require('./models')
const config = require('./config/config')
const history = require('connect-history-api-fallback')

// API Listener
const app = express()
app.use(history())
// morgan for logging
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

require('./routes')(app)

sequelize.sync() // { force: true } to flush
  .then(() => {
    app.listen(config.port)
    console.log(`Server started on port ${config.port}`)
  })
