const app = require('express')()
const { v4 } = require('uuid')
require('dotenv').config()

// Create a random UUID for client
app.get('/api/register', (req, res) => {
  let uuid = v4();

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

  conn.connect((err) => {
    let query = "INSERT INTO users (uuid, data) VALUES ('" + uuid + "','" + JSON.stringify({registered: false}) + "')";

    conn.query(query, (err, results) => {
        console.log("Submit");
    })
    conn.end();
  
    res.json({uuid: uuid});
  });
})

module.exports = app