const mongoose = require('mongoose') 

const data = new mongoose.Schema({
    name:{
        type:String,
        require:true,
        unique:false
    },
    email:{
        type:String,
        require:true,
        unique:false
    },
    password:{
        type:String,
        require:true,
        
    }

})

const Data = mongoose.model('User_Data',data)

module.exports =Data