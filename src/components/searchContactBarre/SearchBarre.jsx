/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import searchIcone from "../../assets/search.png";

function SearchBarre(props) {

  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    props.onSearch(e.target.value);
  };

  return (
    <div className="d-flex container">
      <button type="button-search" className="search-button">
        <img src={searchIcone} />
      </button>
      <input
        value={query}
        onChange={handleInputChange} 
        type="search"
        className="search"
        placeholder="Recherche . . ."
         />
    </div>
  );
}

export default SearchBarre;
