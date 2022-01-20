var dotenv = require('dotenv')
var dotenvExpand = require('dotenv-expand')

var myEnv = dotenv.config()
dotenvExpand.expand(myEnv)

// require('dotenv').config();

module.exports.Config = {
    port: process.env.PORT,
    mongoUri: process.env.MONGO_URI,
    mongoDb: process.env.MONGO_DBNAME,
}