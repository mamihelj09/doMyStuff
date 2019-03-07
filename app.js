const express = require('express')
const bodyParser = require('body-parser')
const logger = require('morgan')
const app = express()
const PORT = process.env.PORT || 8000
require('dotenv').config()

// Database
const db = require('./config/database');

// Test db
db.authenticate()
  .then(() => console.log('Database connected'))
  .catch((e) => console.log('Error', e));

app.use(logger('dev'));

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', (request, response) => {
  response.json({test: 'node js test text' })
})

// routes
app.use('/users', require('./routes/users'));
app.use('/jobs', require('./routes/jobs'));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}.`)
})
