//const router = require('express').Router();
const users = require('express').Router()
const User = require("../models/user")
const userSeedData = require("../models/userSeedData")
const { signup, login } = require("../controllers/authorize");
const { checkUser } = require("../middlewares/authorize");
// app.use('/api/signup', async (req, res) => {
//     console.log(req.body)
//     res.json({status: 'ok'})
// })
  


// users.get("/data/seed", async (req, res) => {
//     await User.insertMany(userSeedData)
//     res.redirect('/')
// })



//Home Route for login
users.get('/login', (req, res) => {
    checkUser()
    res.render("capsules/loginForm")
})

users.post('/login', async (req, res) =>{
    const { username, password } = req.body
    const user = await User.findOne({ username })

    if(!user){
        console.log('user not found')
    }
    if(password === username.password){
        console.log('success')
    }else{
        console.log('invalid password')
    }
})

//Sign Up Form
users.get('/signup', (req, res) => {
    res.render("capsules/signupForm")
})

//Sign Up Route
//app.post('api/signup', async (req, res) => { 
//users.post('/', async (req, res) => {

users.post('api/signup', async (req, res) => { 
  console.log('signup function is running') 
  console.log(req.body)
  const { username, password } = req.body
  const hshpassword = await bcrypt.hash(password, 10)  
  console.log(await (bcrypt.hash(password, 10)))
  console.log('hashed password is: ', hshpassword)

  try {
    const response = await User.create({
      username, 
      password
    })
    console.log('User crreated successfully: ', response)
  }  catch (err) {
      console.log(err)
      return res.json({status: 'error'})
  }
  console.log('status is: ', res.json({status: 'error'}))
  res.json({status: 'ok'})
});

// users.post('/', async (req, res) => {
//     try{
//         const createUser = await User.create(req.body)
//         console.log("User Created", createUser)
//         if(!createUser){
//             res.render("error404")
//         }
//         res.redirect("/users/login")

//     }catch(error){
//       console.log(error)
//     }
// })

module.exports = users;

