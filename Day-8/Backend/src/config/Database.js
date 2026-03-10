const mongoose= require('mongoose')

function connrectToData(){
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("Database");
        
    })
    .catch(()=>{
        console.log("Database error");
        
    })
}

module.exports=connrectToData()