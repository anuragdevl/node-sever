const express = require("express");

const app = express();

app.use("/hello",(req,res)=>{
    res.send("Hello from Server")
})

app.use("/test",(req,res)=>{
    res.send("Hello from Server test")
})

app.listen(4000,()=>{
    console.log("server Connected Succesfully")
});