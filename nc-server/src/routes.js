module.exports = (app) => {
  app.post('/register', (req, res) => {
    res.send({ message: `User ${req.body.email} is registered successfully.` })
  })

  app.get('/status', (req, res) => {
    res.send({ message: 'Hello this is API response' })
  })
}
