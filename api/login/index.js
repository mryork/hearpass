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

app.post('/api/login', (req, res) => {
  conn.connect((err) => {
    conn.query('SELECT data FROM users WHERE uuid="' + req.body.uuid + '"', (err, results, fields) => {
        if(err) { print("err: " + err); }

        let data = JSON.parse(results[0].data);

        res.json(data);
      })
  });
})

module.exports = app