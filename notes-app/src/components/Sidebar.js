import React from "react";
import ListItem from "./ListItem";

const Sidebar = ({
  notes,
  onNoteSelect,
  selectedNoteId,
  filteredNotes,
  setActiveId,
}) => {
  const displayedNotes = (
    filteredNotes.length > 0 ? filteredNotes : notes
  ).sort((a, b) => new Date(b.updatedAt));

  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default Sidebar;
