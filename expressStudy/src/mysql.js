const mysql = require('mysql2/promise');
const connect = {
  host: 'localhost',
  port: '3306',
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: 'user',
};
const connectMySQL = async () => {
  const conn = await mysql.createConnection(connect);
  conn.connect();
  const testQuery = 'SELECT * FROM member';
  const [rows, field] = await conn.execute(testQuery);
  console.log(rows);
};
module.exports = connectMySQL;
