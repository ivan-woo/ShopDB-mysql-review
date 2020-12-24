// TODO: create controller functions

// import dbhelpers

const dbHelpers = require('../database/dbHelpers.js');

module.exports = {
  create: (req, res) => {
    dbHelpers.insert(req, (err, results) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(200).send(`Successfully stored ${req.body.item} in Database`);
      }
    })
  },

  readAll: (req, res) => {
    dbHelpers.getAll((err, results) => {
      // console.log(req);
      if (err) {
        console.log('Unable to read data in database');
        res.status(404).send(err);
      } else {
        console.log('Successfully obtained all data from database');
        res.status(200).send(results);
      }
    })
  },

  getOne: (req, res) => {
    dbHelpers.getOne(req, (err, result) => {
      // console.log(req);
      if (err) {
        console.log('Unable to obtain item in inventory from this ID');
        res.status(404).send(err);
      } else {
        res.status(200).send(result);
      }
    })
  },

  deleteOne: (req, res) => {
    dbHelpers.deleteOne(req, (err, result) => {
      if (err) {
        console.log('Unable to delete item from inventory');
        res.status(404).send(err);
      } else {
        res.status(200).send(`Removed item from inventory`);
      }
    })
  },

  updateOne: (req, res) => {
    dbHelpers.updateOne(req, (err, result) => {
      if (err) {
        console.log('Unable to update item in inventory');
        res.status(404).send(err);
      } else {
        res.status(200).send(`Updated item in inventory to be ${req.body.item}`);
      }
    })
  }
}

