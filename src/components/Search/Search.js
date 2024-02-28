import React, { useState } from 'react';


const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    if (searchTerm.trim() !== '') {
      onSearch(searchTerm);
    } else {
      // Handle error or empty search term
    }
  };

  return (
    <>
      <input 
        type="text" 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
        placeholder="Enter a word" 
      />
      <button onClick={handleSearch}>Search</button>
    </>
  );
};

export default Search;
