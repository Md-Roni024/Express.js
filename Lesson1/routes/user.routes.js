const express = require('express')
const router = express.Router();

router.get("/register",(req,res)=>{
    // res.send("I am at User Register Route")
    // res.send({
    //     "name":"Roni Hossain",
    //     "District":"Chandpur",
    //     "Country":"Bangladesh"
    // })
    // res.status(200).json({
    //     "message":"I am  Register Page",
    //     statusCode:200
    // })
    // res.redirect("/api/user/login")
    res.statusCode = 200;
    //res.sendFile("D:/Express.js/Lesson1/views/register.html")
    // res.cookie("name:","Roni Hossain")
    // res.cookie("age:","24")

    res.clearCookie("age")
    res.end()
});

router.get("/login",(req,res)=>{
    // res.send("I am at User Login Route")
    res.statusCode = 200;
    res.sendFile("D:/Express.js/Lesson1/views/login.html")
});


module.exports = router;
