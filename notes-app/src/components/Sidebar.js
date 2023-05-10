import React from "react";
import ListItem from "./ListItem";

const Sidebar = ({ notes, onNoteSelect, selectedNoteId }) => {
  return (
    <div className="sidebar">
      <ul className="notes__list">
        {notes.map((note) => (
          <ListItem
            key={note.id}
            note={note}
            isSelected={note.id === selectedNoteId}
            onSelectNote={onNoteSelect}
          />
        ))}
      </ul>
    </div>
  );
};  

export default Sidebar;
