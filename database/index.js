// https://www.npmjs.com/package/mysql

// TODO: Establish database connection
var mysql = require('mysql');
var db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Mysql123!',
  database: 'ShopDB'
});

db.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

// db.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results[0].solution);
// });

module.exports = db;