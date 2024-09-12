const mongoose = require('mongoose')
require('dotenv').config();
const DB = process.env.DATABASE_URL


mongoose.connect(DB,{
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