import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { ImPlus } from "react-icons/im";
import { FiEdit } from "react-icons/fi";
import { BiSearch } from "react-icons/bi";

const Nav = () => {
  return (
    <nav className="nav">
      <div>
        <ImPlus className="icon" />
        <MdDeleteForever className="delete-icon" />

        <FiEdit />
      </div>
      <div className="search-box">
        <input
          type="text"
        //   value={searchText}
        //   onChange={handleSearchTextChange}
          placeholder="Search notes..."
        />
        <BiSearch />
      </div>
    </nav>
  );
};

export default Nav;
