const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
// morgan for logging
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.post('/register', (req, res) => {
  res.send({ message: `User ${req.body.email} is registered successfully.` })
})

app.get('/status', (req, res) => {
  res.send({ message: 'Hello this is API response' })
})

app.listen(process.env.PORT || 8081)
