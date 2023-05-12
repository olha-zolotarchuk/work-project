import React, { useState } from "react";

import Workspace from "./components/Workspace";
import Sidebar from "./components/Sidebar";
// import Search from "./components/SearchBox";
import Nav from "./Nav";
// import AddNote from "./components/AddNote";

const App = () => {
  const [selectedNote, setSelectedNote] = useState(null);
  const [selectedNoteId, setSelectedNoteId] = useState(null);

  const [searchText, setSearchText] = useState("");
  const [filteredNotes, setFilteredNotes] = useState("");

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
      content: "це все що можна зробити на 300баксів",
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

  const handleSearchTextChange = (event) => {
    const searchText = event.target.value;
    // console.log(event.target.value);
    console.log(searchText);
    const filteredNotes = notes.filter(
      (note) =>
        note.title.toLowerCase().includes(searchText.toLowerCase()) ||
        note.content.toLowerCase().includes(searchText.toLowerCase())
    );
    console.log(filteredNotes);
    setFilteredNotes(filteredNotes);
    setSearchText(searchText);
  };

  const handleAddNote = () => {
    const newNote = {
      // id: uuidv4(),
      text: "",
      date: new Date().toLocaleDateString(),
    };
    console.log( newNote);
    setNotes([...notes, newNote]);
    console.log( notes);
    // setActiveId(newNote.id);
    // console.log("Active note ID:", newNote.id);
  };

  return (
    <div className="app">
      <Nav
        handleAddNote={handleAddNote}
        selectedNoteId={selectedNoteId}
        handleDeleteNote={handleDeleteNote}
        searchText={searchText}
        handleSearchTextChange={handleSearchTextChange}
      />
      {/* <Search
        searchText={searchText}
        handleSearchTextChange={handleSearchTextChange}
      /> */}
      <div className="app__page">
        <Sidebar
          notes={notes}
          onNoteSelect={handleNoteSelect}
          selectedNoteId={selectedNoteId}
          filteredNotes={filteredNotes}
        />
        <Workspace
          selectedNote={selectedNote}
          handleDeleteNote={handleDeleteNote}
        />
      </div>
      {/* <AddNote /> */}
    </div>
  );
};

export default App;
