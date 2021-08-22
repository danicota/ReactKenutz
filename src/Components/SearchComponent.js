import React from "react";

const SearchComponent = (props) => {
  return (
    <div class="top-container" style={{marginBottom:"50px"}}>
      <form class="search">
        <label>
          Search
          <input type="search" name="find" id="find" />
        </label>
        <button type="button">
          <span class="material-icons">search</span>
        </button>
      </form>
    </div>
  );
};

export default SearchComponent;
