import React from "react";
import AddNote from "./AddNote";

const Workspace = ({ selectedNote = {}, handleDeleteNote, handleAddNote }) => {
  // console.log("Selected note:", selectedNote);
  const handleDelete = () => {
    const shouldDelete = window.confirm(
      "Are you sure you want to delete this note?"
    );
    if (shouldDelete) {
      handleDeleteNote(selectedNote.id);
    }

    //  console.log(selectedNote.id);
  };

  return (
    <div className="workspace">
      {selectedNote ? (
        <div>
          <textarea placeholder="Start typing"></textarea>
          <h2>{selectedNote.title}</h2>
          <p>{selectedNote.content}</p>
          <button className="delete__button" onClick={handleDelete}>
            Delete
          </button>
        </div>
      ) : (
        // <p>Please select a note to view its content.</p>
          <AddNote/>
      )}{" "}
      <button className="add__button" onClick={handleAddNote}></button>
    </div>
  );
};

export default Workspace;
