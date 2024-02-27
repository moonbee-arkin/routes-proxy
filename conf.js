const convig = require('convig')

module.exports = convig.env({
  DB_HOST: 'localhost',
  DB_USER: 'moonbee',
  DB_DATABASE: 'moonbee_login',
  DB_PASSWORD: '797a_#F3pgC+XWE',
  DB_SSL: true,
  PROD: true,
  LOGIN_TOKEN_SECRET: 'n5qp8DcVkdbaaabZ',
  PM2_USER_PATH: '/root',
  PM2_LOG_PATH: '/root/logs'
})
