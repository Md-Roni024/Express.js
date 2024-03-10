const express = require('express')
const router = express.Router();
// parse application/json


router.use("/register",(req,res)=>{
    res.statusCode = 200;
    // const dept = req.query.dept;
    // const id = req.query.id;
    // res.send(`User ID:${id}`)

    //res.sendFile("D:/Express.js/Lesson2/views/register.html");
    const name = req.body.name;
    res.send(`Welcome Name:${name}`)
})

router.use("/login",(req,res)=>{
    res.statusCode = 200;
    res.sendFile("D:/Express.js/Lesson2/views/login.html");
})

module.exports = router;
