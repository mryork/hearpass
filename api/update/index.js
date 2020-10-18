const app = require('express')()
const exp = require('express')
const { v4 } = require('uuid')

require('dotenv').config()

app.use(exp.json());

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

app.post('/api/update', (req, res) => {
  conn.connect((err) => {
    // UPDATE data based on req.body.uuid req.body.data
    conn.query('UPDATE users SET data = "' + req.body.data + '" WHERE uuid="' + req.body.uuid + '"', (err, results, fields) => {
        if(err) print("err: " + err);
        res.json({success: true});
      })
  });
})

module.exports = app