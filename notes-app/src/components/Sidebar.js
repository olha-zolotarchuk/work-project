import React from "react";
import ListItem from "./ListItem";

const Sidebar = ({ notes, onAddNote, onNoteSelect }) => {


 
  return (
    <div className="sidebar">
 
      <ul className="notes__list">
        {notes.map((note) => (
          <ListItem
            key={note.id}
            note={note}
            onSelectNote={() => onNoteSelect(note)}
          />
        ))}

      
   
      </ul>
    </div>
  );
};

export default Sidebar;
