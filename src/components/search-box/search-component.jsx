import React from "react";

export default function SearchBox({ placeholder, handleChange }) {
  return (
    <input type="search" placeholder={placeholder} onChange={handleChange} />
  );
}
