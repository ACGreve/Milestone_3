const capsules = require('express').Router()
const Capsule = require('../models/capsule')
const capsuleSeedData = require('../models/capsuleSeedData')

//Seed data route
capsules.get('/data/seed', async (req, res)=>{
  await Promise.all([Capsule.deleteMany()])
  const capsules = await Capsule.insertMany(capsuleSeedData)
  const capsuleIds = capsules.map(capsule => capsule._id)
  res.redirect('/capsules')
})

//get signup page
capsules.get("/signup", (req, res) => {
  res.render("capsules/signupForm")
})

//get login page
capsules.get("/login", (req, res) => {
  res.render("capsules/loginForm")
})

//Index Route for all the capsules
capsules.get('/', async(req, res)=>{
  const capsules = await Capsule.find()
  res.render("capsules/index", { capsules })
})

// Create new capsule
capsules.post("/", async (req, res) => {
  try {
    const createCapsule = await Capsule.create(req.body)
    if (!createCapsule) {
      res.render("error404")
    }
    res.redirect("capsules")
  } catch (err) {
    console.log(err)
    res.render("error404")
  }
})

//get new page
capsules.get("/new", (req, res) => {
  res.render("capsules/newCapsule")
})

//get capsule by index
capsules.get("/:id", async (req, res) => {
  try {
    const capsule = await Capsule.findById(req.params.id)
    if (!capsule) {
      res.render("error404")
    }
    res.render("capsules/capsuleShow", { capsule })
  } catch (err) {
    console.log(err)
    res.render("error404")
  }
})

//delete capsule by index
capsules.delete("/:id", async (req, res) => {
  const { id } = req.params
  try {
    const capsule = await Capsule.findByIdAndDelete(id)
    if (!capsule) {
      res.render("error404")
    }
    res.redirect("/capsules")
  } catch (err) {
    console.log(err)
    res.render("error404")
  }
})

module.exports = capsules