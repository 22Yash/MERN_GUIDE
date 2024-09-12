const express = require('express')
const app = express()

//dotenv required
const dotenv = require('dotenv')
dotenv.config()
const port = process.env.PORT

app.use(express.json())

//link router files
app.use(require('./routes/data'));

//connect database
require('./db/conn')

//middleware
const middleware = (req,res,next)=>{
    console.log("");
    next();
}


//create a routes for 

// app.get('/',middleware,(req,res,) =>{
//     res.send("hello world")

// })

// app.get('/data',(req,res)=>{
//     res.send("data page")
// })


//run a server

app.listen(port,() => {
    console.log(`server running on ${port}`);
})