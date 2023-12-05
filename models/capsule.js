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
    subDate: {
        type: Date,
        default: Date.now
    }
})

capsuleSchema.virtual('unlockDate').get(function(){
    const unlockDate = new Date(this.subDate)
    unlockDate.setFullYear(unlockDate.getFullYear()+2)
    console.log(unlockDate)
    return unlockDate
})

capsuleSchema.virtual('isLocked').get(function () {
    return this.unlockDate > new Date() && this.status === 'on'
})


module.exports = mongoose.model('Capsule', capsuleSchema)