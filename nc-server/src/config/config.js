module.exports = {
  port: 8081,
  db: {
    database: process.env.DB_NAME || 'nc_db',
    user: process.env.DB_USER || 'nc_dbadmin',
    password: process.env.DB_PASS || 'nc_dbadmin',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './nc_db.sqlite'
    }
  }
}
