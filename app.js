const express=require("express")
const app=express()
const posts=require("./posts")
const rateLimit=require("express-rate-limit")

const limiter=rateLimit({
 max : 5,
 windowMs : 10000 
})

app.get("/post", limiter, (req,res)=>{
    res.send({
        status:"Success",
        posts:"posts"
    })
})

app.listen(3001,()=>{
    console.log("server running on port 3001");
})