// Modules and Globals
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const app = express();

// MIDDLEWARE
app.use(express.json())
app.use(methodOverride('_method'))
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// Controllers & Routes
app.use('/capsules', require('./controllers/capsules'))
app.use('/users', require('./controllers/users'))

// db connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('DB connected'))
    .catch(err => console.error(err));

// Listen for Connections
const PORT= process.env.PORT

app.listen(process.env.PORT, () => {
    console.log(`Listening on ${process.env.PORT}`)
})

module.exports = app