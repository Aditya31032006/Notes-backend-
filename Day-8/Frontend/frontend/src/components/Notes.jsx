import React, { useEffect, useState } from "react";
import axios from "axios";

const Notes = () => {

  const [notes, setnotes] = useState([]);

  const [editId, setEditId] = useState(null)

  const [editTitle, setEditTitle] = useState("")
  const [editDescription, setEditDescription] = useState("")



  function fetchNotes() {
    axios.get("http://localhost:3000/api/notes")
    .then((res) => {
      setnotes(res.data.notes)
    })
  }


  function enterNotes(e) {
    e.preventDefault()

    const { title, description } = e.target.elements

    axios.post("http://localhost:3000/api/notes", {
      title: title.value,
      description: description.value
    })
    .then(() => {
      fetchNotes()
      e.target.reset()
    })
  }


  function deleteNote(id) {
    axios.delete(`http://localhost:3000/api/notes/${id}`)
    .then(() => {
      fetchNotes()
    })
  }


  function startEdit(note){
    setEditId(note._id)
    setEditTitle(note.title)
    setEditDescription(note.description)
  }


  function updateNote(){
    axios.patch(`http://localhost:3000/api/notes/${editId}`,{
      title:editTitle,
      description:editDescription
    })
    .then(()=>{
      setEditId(null)
      fetchNotes()
    })
  }


  useEffect(()=>{
    fetchNotes()
  },[])


  return (
    <>
    
      <form onSubmit={enterNotes}>
        <input type="text" name="title" placeholder="Enter Title"/>
        <input type="text" name="description" placeholder="Enter Description"/>
        <button>Submit</button>
      </form>


      <div className="notes-container">

        {notes.map((elem)=>(
          
          <div className="note-card" key={elem._id}>

            {editId === elem._id ? (

              <>
                <input 
                  value={editTitle}
                  onChange={(e)=>setEditTitle(e.target.value)}
                />

                <input 
                  value={editDescription}
                  onChange={(e)=>setEditDescription(e.target.value)}
                />

                <button onClick={updateNote}>Save</button>
              </>

            ) : (

              <>
                <h1>{elem.title}</h1>
                <p>{elem.description}</p>

                <button onClick={()=>startEdit(elem)}>
                  Edit
                </button>

                <button onClick={()=>deleteNote(elem._id)}>
                  Delete
                </button>
              </>

            )}

          </div>

        ))}

      </div>

    </>
  )
}

export default Notes