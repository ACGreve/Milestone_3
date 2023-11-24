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

//Home Route for all the capsules
capsules.get('/', async(req, res)=>{//this route works fine
  res.render('capsules/index')
})

//get new page
capsules.get("/new", (req, res) => {
  res.render("capsules/newCapsule")
})

module.exports = capsules