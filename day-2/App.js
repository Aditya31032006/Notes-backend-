const express = require("express")

const app=express()

app.get('/',( req,res)=>{
  res.send("hello,world")

})

app.get('/about',( req,res)=>{
  res.send("about this world")
  
})
app.get('/home',( req,res)=>{
  res.send("this is home page ")
  
})
app.listen(3000   )