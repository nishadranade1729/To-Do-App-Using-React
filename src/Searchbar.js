// // import React, { useState } from 'react';

// // const SearchBar = ({ search, setSearch }) => {
// //   const handleChange = (event) => {
// //     setSearch(event.target.value);
// //   };

// //   return (
// //     <div className="search-bar">
// //       <input
// //         type="text"
// //         placeholder="Search..."
// //         value={search}
// //         onChange={handleChange}
// //       />
// //     </div>
// //   );
// // };

// // export default SearchBar;
import React from 'react';
// const [search,setSearch]= useState[];

const SearchBar = ({ search, setSearch }) => {
  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
