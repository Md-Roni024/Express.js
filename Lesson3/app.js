const express = require('express')
var bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/register',(req,res)=>{
    res.statusCode= 200;
    res.sendFile(__dirname+"/views/index.html")
})

app.post('/register',(req,res)=>{
    const fullName = req.body.fullName;
    const age = req.body.age;

    res.send(`You name is ${fullName} and age ${age}`)

    // res.send("Hello")
})

app.get('/',(req,res)=>{
    res.send('Welcome To Home Route')
})

app.use((req,res)=>{
    res.send('404 || Bad URL')
})

module.exports = app;