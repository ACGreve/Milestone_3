const mongoose = require('mongoose')

const capsuleSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    image:{
        type: String
    }
})

module.exports = mongoose.model('Capsule', capsuleSchema)