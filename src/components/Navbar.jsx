import React from "react";

const Navbar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="navbar">
      <h1>
        CollegeDuniya<span>.edu</span>
      </h1>
      <div className="searchBox">
        <input
          type="text"
          placeholder="Search by college name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Navbar;
