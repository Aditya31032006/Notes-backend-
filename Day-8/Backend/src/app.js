const express = require("express")
const app =express()
const noteModel =require("./model/notes.model")
app.use(express.json())

app.post("/api/notes", async(req,res)=>{
    const {title,description}=req.body

    const note=await noteModel.create({
        title, description
    })

    res.status(201).json(
        {
            message: "note created ",
            note
        }
    )
})

app.get("/api/notes", async(req,res)=>{
    // const {title,description}=req.body

    const notes=await noteModel.find()

    res.status(200).json(
        {
            message: "note fetched",
            notes
        }
    )
})



app.delete("/api/notes/:id",async (req,res)=>{

    await noteModel.findByIdAndDelete(req.params.id)

    res.status(200).json({
        message:"deleted"
    })
})
app.patch("/api/notes/:id",async (req,res)=>{
    const {description}=req.body
    await noteModel.findByIdAndUpdate(req.params.id, {description})

    res.status(200).json({
        message:"updated"
    })
})





module.exports=app