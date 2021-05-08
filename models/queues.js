const { getDb } = require('../config/mongo');

const db = getDb();

db.createCollection('Queues', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['queueNumber', 'timestamp'],
      properties: {
        title: {
          bsonType: 'string',
          description: 'queueNumber must be a string',
        },
        overview: {
          bsonType: 'string',
          description: 'timestamp must be a string',
        },
      },
    },
  },
});

const Queues = db.collection('Queues');

class queuesModel {
  static create(newQueue) {
    return Queues.insertOne(newQueue);
  };  
};

module.exports = queuesModel;
