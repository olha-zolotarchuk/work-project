import React from "react";

const Search = ({ searchText, handleSearchTextChange }) => {
  return (
    <div className="search__box">
      <input
        className="search__box__icon"
        type="text"
        
        value={searchText}
        onChange={handleSearchTextChange}
        placeholder="Search notes"
      />
    </div>
  );
};

export default Search;
