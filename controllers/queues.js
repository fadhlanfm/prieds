const queuesModel = require('../models/queues');
const generateQueueNumber = require('../helpers/generateQueueNumber')
const generateTimeStamp = require('../helpers/generateTimeStamp')

class queuesController {
  static async create(req, res) {
    let { counter } = req.params;
    if (counter && counter.length > 1) {
      return res.status(403).json({ message: 'Available counter is only A to Z' });
    }
    counter = (counter ? counter : 'A').toUpperCase();
    const number = generateQueueNumber(counter);
    const queueNumber = counter + number;
    const timestamp = generateTimeStamp();
    const newQueue = { queueNumber, timestamp };
    try {
      await queuesModel.create(newQueue);
      return res.status(200).json({ ...newQueue, counter, number });
    } catch (error) {
      console.log(error);
      return res.status(400).json(error);
    }
  };
}

module.exports = queuesController;
