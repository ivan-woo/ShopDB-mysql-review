// model - will be interacting directly with database

const db = require('./index.js');

module.exports = {
  insert: (req, callback) => {
    // console.log(req.body);
    var sqlString = `INSERT INTO inventory (item, price, quantity) VALUES ("${req.body.item}", ${req.body.price}, ${req.body.quantity})`;
    db.query(sqlString, (err, results) => {
      if (err) {
        callback(err);
      }
      callback(null, results);
    })
  },

  getAll: (callback) => {
    var sqlString = 'Select * from inventory';
    db.query(sqlString, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    })
  },

  getOne: (req, callback) => {
    var sqlString = `Select * from inventory WHERE id = ${req.params.id}`
    db.query(sqlString, (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null, result);
      }
    })
  },

  deleteOne: (req, callback) => {
    var queryString = `Delete from inventory where id = ${req.params.id}`;
    db.query(queryString, (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null, result);
      }
    })
  },

  updateOne: (req, callback) => {
    var queryString = `UPDATE inventory SET item = "${req.body.item}", price = ${req.body.price}, quantity = ${req.body.quantity} WHERE id = ${req.params.id}`
    db.query(queryString, (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null, result);
      }
    })
  }

}