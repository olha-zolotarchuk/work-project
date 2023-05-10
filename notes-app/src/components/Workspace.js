import React from "react";

const Workspace = ({ selectedNote = {}, handleDeleteNote }) => {
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
          <h2>{selectedNote.title}</h2>
          <p>{selectedNote.content}</p>
          <button className="delete__button" onClick={handleDelete}>
            Delete
          </button>
        </div>
      ) : (
        <p>Please select a note to view its content.</p>
      )}
    </div>
  );
};

export default Workspace;
