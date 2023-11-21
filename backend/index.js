// Modules and Globals
require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();
// const path = require('path')

// Express Settings
app.use(cors())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())

// serve static front end in production mode

// Controllers & Routes
app.use(express.urlencoded({ extended: true }))

app.use('/capsules', require('./controllers/capsules'))
app.use('/users', require('./controllers/users'))

// Listen for Connections
app.listen(process.env.PORT, () => {
    console.log(`Listening on ${process.env.PORT}`)
})