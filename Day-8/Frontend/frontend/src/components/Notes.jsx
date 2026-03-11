import React, { useState } from "react";
import axios from "axios"
const Notes = () => {
  const [notes, setnotes] = useState([
    {
      title: "hello 1",
      description: "world 1",
    },
    {
      title: "hello 1",
      description: "world 1",
    },
    {
      title: "hello 1",
      description: "world 1",
    },
    {
      title: "hello 1",
      description: "world 1",
    },
  ]);

  axios.get('http://localhost:3000/api/notes')
    .then((res)=>{
      setnotes(res.data.notes);
      
    })
  


  return (
    <>
      <div className="notes-container">
        {notes.map((elem, index) => (
          <div className="note-card" key={index}>
            <h1>{elem.title}</h1>
            <p>{elem.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Notes;
