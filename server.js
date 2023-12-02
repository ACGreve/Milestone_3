
// Modules and Globals
require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const methodOverride = require("method-override")
const app = express()
const cookieParser = require("cookie-parser") 
const cors = require("cors");
const authRoutes = require("./middlewares/authRoutes");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");

// MIDDLEWARE
app.use(express.json())
app.use(methodOverride("_method"))
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"))
app.set("views", __dirname + "/views")
app.set("view engine", "jsx")
app.engine("jsx", require("express-react-views").createEngine())
app.use(cookieParser())
app.use(authRoutes)
app.use(bodyParser.json())
//app.use('/api/signup', require('./controllers/users')){

app.use('/api/signup', async (req, res) => {
  console.log(req.body)
  res.json({status: 'ok'})
})

// app.use(
//   cors({
//     origin: ["http://localhost:5001"],
//     methods: ["GET", "POST"],
//     credentials: true,
//   }))




// Controllers
app.use("/capsules", require("./controllers/capsules"))
app.use("/users", require("./controllers/users"))

// app.post('api/signup', async (req, res) => { 
//   console.log('signup function is running') 
//   console.log(req.body)
//   const { username, password } = req.body
//   const hshpassword = await bcrypt.hash(password, 10)  
//   console.log(await (bcrypt.hash(password, 10)))
//   console.log('hashed password is: ', hshpassword)

//   try {
//     const response = await User.create({
//       username, 
//       password
//     })
//     console.log('User crreated successfully: ', response)
//   }  catch (err) {
//       console.log(err)
//       return res.json({status: 'error'})
//   }
//   console.log('status is: ', res.json({status: 'error'}))
//   res.json({status: 'ok'})
// });


// routes
app.get("/", (req, res) => {
  res.render("home")
})

app.get("*", (req, res) => {
  res.render("Error404")
})

// db connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("DB connected"))
  .catch((err) => console.error(err))

// Listen for Connections
const PORT = process.env.PORT

app.listen(process.env.PORT, () => {
  console.log(`Listening on ${process.env.PORT}`)
})


module.exports = app
