
require("dotenv").config()
const app =require("./src/app")
const connectToData=require("./src/config/database")


connectToData()








app.listen(3000,()=>{
    console.log("running");
    
})