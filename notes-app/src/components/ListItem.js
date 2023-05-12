import React from "react";

const ListItem = ({ note, isSelected, onSelectNote, handleDeleteNote }) => {
  const handleClick = () => {
    onSelectNote(note);
  };

  return (
    <div
      className={`list__item ${isSelected ? "selected" : ""}`}
      onClick={handleClick}
    >
      <div className="list__item__title">{note.title}</div>
      <div className="list__item__body">
        <div className="list__item__date">{note.date}</div>
        <div className="list__item__conten">{note.content}</div>
      </div>
    </div>
  );
};

export default ListItem;
