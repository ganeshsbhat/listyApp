import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(preValue => {
      return [...preValue, newNote];
    });
  }

  function deleteNoteFromList(id) {
    setNotes(preValue => {
      return preValue.filter((note, idx) => {
        return idx !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((note, idx) => {
        return (
          <Note
            key={idx}
            id={idx}
            title={note.title}
            content={note.content}
            deleteItem={deleteNoteFromList}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
