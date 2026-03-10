const express =require("express")
const app = express()
const notes =[]
app.use(express.json())
app.post('/notes', (req,res)=>{

    notes.push(req.body)
    res.status(201).json({
        message:"note created succsefully"
    })
})
app.get('/notes', (req,res)=>{

    // notes.push(req.body)
    
    res.status(200).json({
        notes: notes
    })
})


app.delete('/notes/:id', (req,res)=>{

    delete notes[req.params.id]

    res.status(204).json({
        message: "note deleted"
    })
})

app.patch("/notes/:id",(req,res)=>
{
    notes[req.params.id].title= req.body.title

    res.status(200).json({
        message :"modified"
    })
})




module.exports=app




