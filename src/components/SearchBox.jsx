import React from "react";
import { CiSearch } from "react-icons/ci";

function SearchBox({ search, setSearch, searchHandler }) {
  return (
    <div>
      <input
        type="text"
        placeholder="جستجو"
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}
      />
      <button onClick={searchHandler}>
        <CiSearch />
      </button>
    </div>
  );
}

export default SearchBox;
