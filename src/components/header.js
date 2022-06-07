import React from 'react'

import { BiSearchAlt2 } from "react-icons/bi";
const Header = () => {
  return (
    <div class="navbar">
      <div class="home">Home</div>
      <div class="searchbox">
        <input
          type="text"
          placeholder="search"
          name="search"
          className="search-input"
        ></input>
        <div id="icon">
          <BiSearchAlt2 />
        </div>
      </div>
    </div>
  )
}

export default Header;