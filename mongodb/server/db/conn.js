require('dotenv').config(); 
const mongoose = require('mongoose')

const url = process.env.MONGODB_URL


mongoose.connect(url,{
  
    retryWrites: true,
    w: 'majority',
    appName: 'Cluster0'
})
        .then(() =>{
            console.log("connection successful");
        })
        .catch((err)=>{
            console.log(err);
        })