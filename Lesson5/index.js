const express = require('express')
require("dotenv").config()
const app = express()

PORT = process.env.PORT || 3000;

app.get('/',(req,res)=>{
    res.send("Hello")
})

app.listen(PORT,(req,res)=>{
    console.log(`Server Running at http://localhost:${PORT}`)
})


