const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017/';
const dbName = 'prieds';

let db;
const client = new MongoClient(url, { useUnifiedTopology: true });

function connect(callback) {
  client.connect(function (error) {
    if (error) {
      console.log('mongoDB connection error');
    } else {
      console.log('mongoDB connected');
      db = client.db(dbName);
    }
    callback(error);
  });
};

function getDb() {
  return db;
};

module.exports = {
  connect,
  getDb,
};
