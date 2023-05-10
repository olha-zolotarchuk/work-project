import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { ImPlus } from "react-icons/im";
import { FiEdit } from "react-icons/fi";

const Nav = ({ handleDeleteNote, selectedNoteId }) => {
  return (
    <nav className="nav">
      <div className="edit__box">
        <button className="icon__box">
          <ImPlus className="icon" />
        </button>
       
          <button className="icon__box">
            <MdDeleteForever
              className="icon"
              onClick={() => handleDeleteNote(selectedNoteId)}
            />
          </button>
          <button className="icon__box">
            <FiEdit className="icon" />
          </button>
   
    
      </div>
      <div className="search__box">
        <input
          className="search__box__icon"
          type="text"
          //   value={searchText}
          //   onChange={handleSearchTextChange}
          placeholder="Search"
        />
      </div>
    </nav>
  );
};

export default Nav;
