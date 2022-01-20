const res = require("express/lib/response");
const { MongoClient } = require("mongodb");
const debug = require("debug")("app:database");

const { Config } = require('../config/index')

var connection = null;

module.exports.Database = (collection) =>
  new Promise(async (res, rej) => {
    try {
      if (!connection) {

        const client = new MongoClient(Config.mongoUri);
        connection = await client.connect();
        debug("Connected successfully to MongoDB Server");
  
    }

      const db = connection.db(Config.mongoDb);
      res(db.collection(collection));

    } catch (error) {
        // debug('Already connected to MongoDB Server')
        rej(error);
    }
  });
