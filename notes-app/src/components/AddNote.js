import React, { useState, useEffect } from "react";

const AddNote = ({  }) => {
  // const [title, setTitle] = useState("");
  // const [content, setContent] = useState("");

  const [noteText, setNoteText] = useState("");

  const handleNoteChange = (event) => {
    setNoteText(event.target.value);
  };

  useEffect(() => {
    // open the IndexedDB database
    const request = indexedDB.open("notes", 1);

    // handle upgrade needed event
    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      const objectStore = db.createObjectStore("notes", {
        keyPath: "id",
        autoIncrement: true,
      });
      objectStore.createIndex("noteText", "noteText", { unique: false });
    };

    // handle success event
    request.onsuccess = (event) => {
      const db = event.target.result;

      // save the note to the IndexedDB database
      const transaction = db.transaction("notes", "readwrite");
      const objectStore = transaction.objectStore("notes");
      const newNote = { noteText };
      const request = objectStore.add(newNote);
      request.onsuccess = () => {
        console.log("Note saved to IndexedDB:", noteText);
      };
    };
  }, [noteText]);

  return (
    <div className="note">
      <textarea
        cols="10"
        rows="5"
        placeholder="Type...."

        value={noteText}
        onChange={handleNoteChange}
      ></textarea>
     
    </div>

    // <form onSubmit={handleSubmit}>
    //   <label>
    //     <input
    //       type="text"
    //       value={title}
    //       onChange={(event) => setTitle(event.target.value)}
    //       placeholder="Title"
    //     />
    //   </label>
    //   <br />
    //   <label>
    //     <textarea
    //       value={content}
    //       onChange={(event) => setContent(event.target.value)}
    //       placeholder="Content"
    //     />
    //   </label>
    //   <br />
    //   <button type="submit">Add Note</button>
    // </form>
  );
};

export default AddNote;
