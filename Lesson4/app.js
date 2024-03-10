const express = require('express')
const app = express();
var bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/views/index.html")
})

app.get('/circle',(req,res)=>{
    res.sendFile(__dirname+"/views/circle.html")
})

app.get('/triangle',(req,res)=>{
    res.sendFile(__dirname+"/views/triangle.html")
})


app.post('/triangle',(req,res)=>{
    const height = req.body.height;
    const width = req.body.width;

    const area = 0.5*height*width;
    res.statusCode = 200;
    res.send(`Triangle Area is:${area}`)
})


app.post('/circle',(req,res)=>{
    const r = req.body.radius;
    const area = 3.14159*r*r;
    res.send(`Circle Area is:${area}`)
    res.statusCode = 200;
})


module.exports = app;