import React, { useState, useEffect } from "react";
import { saveNote } from "../components/indexeddb";

const Workspace = ({ selectedNote = {}, handleDeleteNote }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    setTitle(selectedNote?.title || "");
    console.log("title", selectedNote);
    setContent(selectedNote?.content || "");
  }, [selectedNote]);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);

    if (selectedNote) {
      const updatedNote = { ...selectedNote, title: event.target.value };
      saveNote(updatedNote);
    }
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
    if (selectedNote) {
      const updatedNote = { ...selectedNote, content: event.target.value };
      saveNote(updatedNote);
    }
  };

  const handleDelete = () => {
    const shouldDelete = window.confirm(
      "Are you sure you want to delete this note?"
    );
    if (shouldDelete) {
      handleDeleteNote(selectedNote.id);
    }
  };

  return (
    <div className="workspace">
      {selectedNote ? (
        <div>
          <textarea
            className="title"
            placeholder="Title"
            value={title}
            onChange={handleTitleChange}
          />
          <textarea
            className="content"
            placeholder="Start typing here..."
            value={content}
            onChange={handleContentChange}
          />
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
