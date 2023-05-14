import React, { useState, useEffect } from "react";

const AddNote = ({}) => {
  const [noteContent, setNoteContent] = useState("");
  const [noteTitle, setNoteTitle] = useState("");

  const handleNoteChangeTitle = (event) => {
    setNoteTitle(event.target.value);
  };

  const handleNoteChangeContent = (event) => {
    setNoteContent(event.target.value);
  };

  useEffect(() => {
    const request = indexedDB.open("notes", 1);
    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      const objectStore = db.createObjectStore("notes", {
        keyPath: "id",
        autoIncrement: true,
      });
      objectStore.createIndex("noteContent", "noteContent", { unique: false });
    };
    request.onsuccess = (event) => {
      const db = event.target.result;
      const transaction = db.transaction("notes", "readwrite");
      const objectStore = transaction.objectStore("notes");
      const newNote = { noteContent, noteTitle };
      const request = objectStore.add(newNote);
      request.onsuccess = () => {
        console.log("noteContent IndexedDB:", noteContent);
        console.log("noteTitle IndexedDB:", noteTitle);
      };
    };
  }, [noteContent, noteTitle]);

 
  return (
    <div className="note">
      <form>
  
        <textarea
          placeholder="Title..."
          value={noteContent}
          onChange={handleNoteChangeContent}
        ></textarea>
        <textarea
          placeholder="Content..."
          value={noteTitle}
          onChange={handleNoteChangeTitle}
        ></textarea>
      </form>
    </div>
  );
};

export default AddNote;



// import React from "react";
// // import AddNote from "./AddNote";

// const Workspace = ({ selectedNote = {}, handleDeleteNote }) => {

//   // console.log("Selected note:", selectedNote);
//   const handleDelete = () => {
//     const shouldDelete = window.confirm(
//       "Are you sure you want to delete this note?"
//     );
//     if (shouldDelete) {
//       handleDeleteNote(selectedNote.id);
//     }
//     //  console.log(selectedNote.id);
//   };

//   return (
//     <div className="workspace">
//       {selectedNote ? (
//         <div>

//           <h2>{selectedNote.title}</h2>
//           <p>{selectedNote.content}</p>
//           <button className="delete__button" onClick={handleDelete}>
//             Delete
//           </button>
//         </div>
//       ) : (
//         <p>Please select a note to view its content.</p>
      
//       )}
//      </div>
//   );
// };

// export default Workspace;


// import React from "react";
// import ListItem from "./ListItem";

// const Sidebar = ({
//   notes,
//   onNoteSelect,
//   selectedNoteId,
//   filteredNotes,
//   setActiveId,
// }) => {
//   const displayedNotes = (
//     filteredNotes.length > 0 ? filteredNotes : notes
//   ).sort((a, b) => new Date(b.updatedAt));

//   return (
//     <React.Fragment>
//       <div className="sidebar">
//         <ul className="notes__list">
//           {displayedNotes.map((note) => (
//             <ListItem
//               key={note.id}
//               note={note}
//               isSelected={note.id === selectedNoteId}
//               onSelectNote={onNoteSelect}
//               setActiveId={setActiveId}
//             />
//           ))}
//         </ul>
//       </div>
//     </React.Fragment>
//   );
// };

// export default Sidebar;
// 