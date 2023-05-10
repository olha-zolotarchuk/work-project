import React, { useState } from "react";

import Workspace from "./components/Workspace";
import Sidebar from "./components/Sidebar";
// import Search from "./components/SearchBox";
import Nav from "./Nav";

const App = () => {
  const [selectedNote, setSelectedNote] = useState(null);
  const [selectedNoteId, setSelectedNoteId] = useState(null);

  // const [searchText, setSearchText] = useState("");
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "First Notefrgf",
      content:
        "This is the content of the first notegrrrrrr rrrrrrrrrr rrrrrr rrrrrrrrr rrrrrrrr rrrrrr rrrr rrrrrr rrrrrrrrrr rrrrrrrrrrr rrrrrr rrrrr rrrrrrrrrr rrrr rrrrrrrrrrrrr rrrrrrrrr rrrrrrrr rrrrrrrrrr rrrrr rrrrrrrr rrrrrrrrrr rrrrrrrrrrrr rrrrrrrrrrrrrrrrr rrrrrrrrvf",
      date: "12/07/92",
    },
    {
      id: 2,
      title: "Second Note",
      content: "This is the content of the second note",
      date: "12/07/92",
    },
    {
      id: 3,
      title: "Third Note",
      content: "This is the content of the third note",
      date: "12/07/92",
    },
  ]);
  // console.log(notes);
  // console.log(selectedNote);

  const handleNoteSelect = (note) => {
    setSelectedNoteId(note.id);
    setSelectedNote(note);
  };

  const handleDeleteNote = (id) => {
    //  console.log(id);
     const shouldDelete = window.confirm(
      "Are you sure you want to delete this note?"
    );
    if (shouldDelete) {
      const newNotes = notes.filter((note) => note.id !== id);
      //  console.log(newNotes);
      setNotes(newNotes);
    }
 

  };

  return (
    <div className="app">
      <Nav
        selectedNoteId={selectedNoteId}
        handleDeleteNote={handleDeleteNote}
      />

      <div className="app__page">
        <Sidebar
          notes={notes}
          title={notes.title}
          onNoteSelect={handleNoteSelect}
          selectedNoteId={selectedNoteId}
        />
        <Workspace
          selectedNote={selectedNote}
          handleDeleteNote={handleDeleteNote}
        />
      </div>
    </div>
  );
};

export default App;
