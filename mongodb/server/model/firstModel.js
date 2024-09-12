const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
})





const Connection  = mongoose.model('CONNECTION',userSchema)

module.exports = Connection