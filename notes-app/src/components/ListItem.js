import React from "react";

const ListItem = ({ note, isSelected, onSelectNote }) => {
  const handleClick = () => {
    onSelectNote(note);
  };

  return (
    <div
      className={`list__item ${isSelected ? "selected" : ""}`}
      onClick={handleClick}
    >
      <div className="list__item__title">{note.title}</div>
      <div className="list__item__body">{note.body}</div>
    </div>
  );
};

export default ListItem;
