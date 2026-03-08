const express=require("express")

const app = express()
app.use(express.json())


const notes=[]
app.get('/', (req,res)=>{
    res.send("hllo")
})

app.post('/notes',(req,res)=>{

    // console.log(req.body)
    notes.push(req.body)
    console.log(notes)
    res.send("note created")
})

app.get('/notes',(req,res)=>{

    // console.log(req.body)
    res.send(notes)
})


app.delete('/notes/:index',(req,res)=>{
    
    delete notes[req.params.index]

    res.send("deleted")
 })


app.patch('/notes/:index',(req,res)=>{

    const index = Number(req.params.index)

    // if(!notes[index]){
    //     return res.send("note not found")
    // }

    notes[index].description = req.body.description

    res.send("edited")
})



module.exports=app