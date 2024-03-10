const express = require('express')
var bodyParser = require('body-parser')
const app = express()
const userRouter = require('./routes/user.routes')
const adminRouter = require('./routes/admin.routes')



app.use(bodyParser.json())

app.use("/api/user",userRouter);
app.use("/api/admin",adminRouter);

app.post("/user",(req,res)=>{
    const name = req.body.name;
    res.send(`Welcome Name:${name}`)
})

app.get("/",(req,res)=>{
    res.send('Home Route')
})



module.exports = app;