const { getDb } = require('../config/mongo');

const db = getDb();

db.createCollection('Visitors', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['name', 'city', 'address', 'npwp', 'contact'],
      properties: {
        name: {
          bsonType: 'string',
          description: 'name must be a string',
        },
        city: {
          bsonType: 'string',
          description: 'city must be a string',
        },
        address: {
          bsonType: 'string',
          description: 'address must be a string',
        },
        npwp: {
          bsonType: 'string',
          description: 'npwp must be a string',
        },
        contact: {
          bsonType: 'string',
          description: 'contact must be a string',
        },
      },
    },
  },
});

const Visitors = db.collection('Visitors');

class visitorsModel {
  static add(newVisitor) {
    return Visitors.insertOne(newVisitor);
  };

  static async getAll(skip = 0, limit = 10, page = 1) {
    let total = await Visitors.countDocuments();
    let data = await Visitors.find({}).skip(skip).limit(limit).toArray();
    return {
      total,
      limit,
      page,
      data,
    }
  };
};

module.exports = visitorsModel;
