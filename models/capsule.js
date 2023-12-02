const mongoose = require('mongoose')

const capsuleSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    capsuleImage:{
        type: String
    },
    image:{
        type: String
    },
    note:{
        type: String
    },
    status: { 
        type: String, 
    }, // 'draft' or 'locked'
    lockedBy: { 
        type: String, 
        default: null 
    }, // User ID who locked the document
})

module.exports = mongoose.model('Capsule', capsuleSchema)