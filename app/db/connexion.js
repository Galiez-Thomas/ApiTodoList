const Pool = require('pg').Pool
const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  database: 'todolist',
  password: '18-Decembre',
  port: 4321,
})

module.exports = pool;