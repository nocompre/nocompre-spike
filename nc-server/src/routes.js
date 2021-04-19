const AuthenticationControllers = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
module.exports = (app) => {
  app.post(
    '/register',
    AuthenticationControllerPolicy.register,
    AuthenticationControllers.register
  )
  app.post(
    '/login',
    AuthenticationControllers.login
  )
  app.get('/status', (req, res) => {
    res.send({ message: 'Hello this is API response' })
  })
}
