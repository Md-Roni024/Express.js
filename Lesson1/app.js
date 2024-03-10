const express = require("express")
const app = express();
const userRouter = require('./routes/user.routes')


app.use("/api/user",userRouter)

app.get("/",(req,res)=>{
    // res.send("I am at Home Route")
    res.sendFile(__dirname+"/views/index.html")
});

app.use((req,res)=>{
    res.send("<h1>404! Bad URL</h1>")
})

module.exports = app;