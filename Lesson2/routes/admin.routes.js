const express = require('express')
const router = express.Router();

router.use("/register",(req,res)=>{
    res.statusCode = 200;
    res.sendFile("D:/Express.js/Lesson2/views/adminRegister.html");
})

router.use("/login",(req,res)=>{
    res.statusCode = 200;
    res.sendFile("D:/Express.js/Lesson2/views/adminLogin.html");
})


module.exports = router;