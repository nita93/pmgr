import React from 'react';

const SearchRobots = ({searchfield, searchValueChange}) => {
    return(
        <input 
        type="search" 
        placeholder="Find your robot" 
        onChange={searchValueChange}
        className="searchBox"
        />
    );
}

export default SearchRobots;
