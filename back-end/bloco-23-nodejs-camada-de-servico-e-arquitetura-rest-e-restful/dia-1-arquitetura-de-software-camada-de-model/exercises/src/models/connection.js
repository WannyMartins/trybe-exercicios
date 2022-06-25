const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'wanny',
  password: '12345678',
  database: 'bd',
});

module.exports = connection;