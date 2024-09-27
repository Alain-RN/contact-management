import React from 'react';
import searchIcone from "../../assets/search.png"

function SearchBarre() {
    return (
        <div className='d-flex '>
            <input 
                type="search" 
                className='search'
                placeholder='Recherche . . .'
                />
            <button type="button" className="search-button" >
                <img src={searchIcone}/>
            </button>
        </div>
    );
}

export default SearchBarre;