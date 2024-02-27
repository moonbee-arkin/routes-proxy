const express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const models = require('./models')
const CONF = require('./conf')

const app = express()

const corsOptions = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  optionsSuccessStatus: 200
}
app.use(cors(corsOptions))
app.options('*', cors())

const customRouter = async function (req) {
    const tokenless_url_whitelist = ['/newsletter/unsubscribe'];
    if (tokenless_url_whitelist.some(url => req.url.startsWith(url))) {
        // Die URL beginnt mit einem Element aus der tokenless_url_whitelist
        const global_url_token = req.query.gut
        const orgDbCredentials = await models.org_db_credentials.findOne({ where: { global_url_token } })
        const pm2Port = orgDbCredentials.dataValues.pm2_port
        return 'http://localhost:' + pm2Port
    } else {
        // Die URL beginnt nicht mit einem Element aus der tokenless_url_whitelist
        const token = req.headers && req.headers.authorization && req.headers.authorization.split(' ')[1]
        return jwt.verify(token, CONF.LOGIN_TOKEN_SECRET, async (err, decoded) => {
            if (err) {
                console.log(err);
                return
            } else {
                console.log('token verified')
                console.log(decoded)
                const orgId = decoded.orgId
                const organization = await models.organization.findOne({ where: { id: orgId } })
                const authId = organization.dataValues.auth_id
                const orgDbCredentials = await models.org_db_credentials.findOne({ where: { auth_id: authId } })
                const pm2Port = orgDbCredentials.dataValues.pm2_port
                return 'http://localhost:' + pm2Port
            }
        })
    }
}

const options = { router: customRouter }
const myProxy = createProxyMiddleware(options)
app.use(myProxy)

app.listen(5000);
