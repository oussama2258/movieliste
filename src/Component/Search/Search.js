import React, { useState } from "react";

const Search = ({ setInputSearch }) => {
  return (
    <div>
      <input
        type="text"
        style={{ marginBottom: "10%" }}
        onChange={(e) => setInputSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;
