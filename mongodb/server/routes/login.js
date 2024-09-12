const express  = require('express')
const router  = express.Router()


const Connection = require('../model/firstModel')



router.get('/',(req,res)=>{
    res.send("home router")
})


router.post('/login',(req, res) => {
    res.send("login apge")
})