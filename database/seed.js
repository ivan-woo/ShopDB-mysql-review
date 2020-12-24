// Create a seeding function in `database/seed.js` to populate table with at least 5 records

const db = require('./index.js');

const items = [
  {item: 'chocolate', price: 5, quantity: 2},
  {item: 'pizza', price: 7, quantity: 1},
  {item: 'oranges', price: 2, quantity: 5},
  {item: 'chips', price: 3, quantity: 2},
  {item: 'coffee', price: 5, quantity: 2}
];

const seeder = () => {
  items.forEach(item => {
    let sqlString = `INSERT INTO inventory (item, price, quantity) VALUES ("${item.item}", ${item.price}, ${item.quantity})`;
    db.query(sqlString, (err, results) => {
      if (err) {
        console.log(`Seed Failed: ${err}`);
      } else {
        console.log(`${item.item} added to inventory`);
      }
    })
  })
  db.end();
}

seeder();