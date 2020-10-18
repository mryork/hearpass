const app = require('express')()
const { v4 } = require('uuid')
require('dotenv').config()

app.get('/api', (req,res) => {
  console.log("aaa")
  res.sendStatus(200);
})

module.exports = app