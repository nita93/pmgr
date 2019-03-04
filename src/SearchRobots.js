import React from 'react';

const SearchRobots = ({searchfield, searchValueChange}) => {
    return(
        <input 
        type="search" 
        placeholder="Find a robot" 
        onChange={searchValueChange}
        className="searchBox"
        />
    )
}

export default SearchRobots;