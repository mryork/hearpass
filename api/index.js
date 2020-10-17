const app = require('express')()
const { v4 } = require('uuid')
require('dotenv').config()

// Database (Cloud SQL)
let dbip = process.env.dbip;
let dbuser = process.env.dbuser;
let dbpassword = process.env.dbpassword;
let db = process.env.db;

const mysql = require('mysql');

var conn = mysql.createConnection({
  host: dbip,
  user: dbuser,
  password: dbpassword,
  database: db
})

// Create a random UUID for client
app.get('/registerinit', (req, res) => {
  let uuid = v4();

  conn.connect();
  conn.query('INSERT INTO users (uuid, data) VALUES (' + uuid + ',' + JSON.stringify({registered: false}) + ')')
  conn.end();

  res.json({uuid: uuid});
})

app.get('/register', (req, res) => {
  
})

module.exports = app