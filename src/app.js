const express = require("express");

const app = express();

app.get("/user/:userId/:name/:password",(req,res)=>{
    console.log(req.params)
        res.send({
            firstName:"ANURAG",
            lastName:"Singh" 
        })
    })

    // app.post("/user",(req,res)=>{
    //     console.log("data post successcefullly ")
    //     // saving data to db
    //     res.send( "Data succesfully send to the database")
    // })


    
    // app.delete("/user",(req,res)=>{
    //     console.log("data post successcefullly ")
    //     // saving data to db
    //     res.send( "Deleted  succesfully")
    // })
// app.use("/hello/2",(req,res)=>{
//     res.send("Hello from Server hello/2 ")
// })

// app.use("/hello",(req,res)=>{
//     res.send("Hello from Server hello")
// })

// app.use("/test",(req,res)=>{
//     res.send("Hello from Server test")
// })
 
app.listen(4000,()=>{
    console.log("server Connected Succesfully")
}); 
