import React from "react";
import ListItem from "./ListItem";

const Sidebar = ({
  notes,
  onNoteSelect,
  selectedNoteId,
  filteredNotes,
  setActiveId,
}) => {

  const displayedNotes = filteredNotes.length > 0 ? filteredNotes : notes;

  return (
    <div className="sidebar">
      <ul className="notes__list">
        {displayedNotes.map((note) => (
          <ListItem
            key={note.id}
            note={note}
            isSelected={note.id === selectedNoteId}
            onSelectNote={onNoteSelect}
            setActiveId={setActiveId}
          />
        ))}
      </ul>
    </div>
  );
};  

export default Sidebar;
