const express =require("express")

const app=express()
app.use(express.json())

const noteModel =require('./models/notes.model')



app.post('/notes', async(req,res)=>
{
    const {title,description }=req.body

    const note = await noteModel.create({
        title,description
    })

    res.status(201).json({
        messagae: "note created ",
        note
    })
})


module.exports =app