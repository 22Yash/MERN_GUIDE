const express = require('express')
const app = express()


const cors = require('cors');
require('dotenv').config();

const port = process.env.PORT || 1012 ;


require('./db/conn')



app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.get('/login',(req,res)=>{
    res.status(200).json({ message: " successfully created" });
})





app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});