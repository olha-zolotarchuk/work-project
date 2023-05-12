import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { ImPlus } from "react-icons/im";
import { FiEdit } from "react-icons/fi";
import Search from "./components/SearchBox";

const Nav = ({
  handleDeleteNote,
  selectedNoteId,
  searchText,
  handleSearchTextChange,
  handleAddNote,
}) => {
  return (
    <nav className="nav">
      <div className="edit__box">
        <button className="icon__box" onClick={handleAddNote}>
          <ImPlus className="icon" />
        </button>

        <button
          className="icon__box"
          onClick={() => handleDeleteNote(selectedNoteId)}
        >
          <MdDeleteForever className="icon" />
        </button>
        <button className="icon__box">
          <FiEdit className="icon" />
        </button>
      </div>
      <Search
        searchText={searchText}
        handleSearchTextChange={handleSearchTextChange}
      />
    </nav>
  );
};

export default Nav;
