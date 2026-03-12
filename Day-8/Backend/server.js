
require('dotenv').config()
const app=require("./src/app")

const connectToData= require("./src/config/Database")
connectToData()






const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log("running");
    
})