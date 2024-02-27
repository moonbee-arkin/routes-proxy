const CONF = require('../conf')

module.exports = {
  development: {
    username: CONF.DB_USER,
    password: CONF.DB_PASSWORD,
    database: CONF.DB_DATABASE,
    host: CONF.DB_HOST,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: CONF.DB_SSL,
        rejectUnauthorized: false
      }
    },
    port: 5432,
    pool: {
      max: 5,
      min: 0,
      idle: 100000,
      acquire: 50000,
      evict: 50000,
      handleDisconnects: true
    },
    logging: false
  },
  secret: {
    'secret': CONF.LOGIN_TOKEN_SECRET
  }
};
