
import React from "react";

function SearchBar({ setSearchQuery }) {
  return (
    <div className="card search-card" role="search" >
      <label className="search-label" >Search Projects</label>
      <input
        id="search"
        className="input"
        type="search"
        placeholder="Type a project title"
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;

