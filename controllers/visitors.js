const visitorsModel = require('../models/visitors');

class visitorsController {
  static async add(req, res) {
    const { name, city, address, npwp, contact } = req.body;
    const newVisitorData = { name, city, address, npwp, contact };
    try {
      await visitorsModel.add(newVisitorData);
      return res.status(200).json({ message: 'New visitor has been added', newVisitorData });
    } catch (error) {
      console.log(error);
      return res.status(400).json(error);
    }
  };

  static async getAll(req, res) {
    let page = parseInt(req.query.page);
    let limit = parseInt(req.query.limit);
    try {
      let skip = limit * page - limit;
      const visitors = await visitorsModel.getAll(skip, limit, page);
      return res.status(200).json(visitors);
    } catch (error) {
      console.log(error);
    }
  };
}

module.exports = visitorsController;
