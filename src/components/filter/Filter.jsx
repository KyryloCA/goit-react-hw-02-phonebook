import React from 'react';

const Filter = ({ searchEngine, inputValue }) => {
  return (
    <input
      id="searchForm"
      name="searchForm"
      type="text"
      value={inputValue}
      onChange={searchEngine}
    />
  );
};

export default Filter;
