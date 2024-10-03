import React from "react";
import searchIcone from "../../assets/search.png";

function SearchBarre() {
  return (
    <div className="d-flex container">
      <button type="button-search" className="search-button" >
        <img src={searchIcone} />
      </button>
      <input type="search" className="search" placeholder="Recherche . . ." />
    </div>
  );
}

export default SearchBarre;
