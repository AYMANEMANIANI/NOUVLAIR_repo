import React from "react";
import "./assets/css/Header.css"; 
import me from "./assets/images/moon.jpg"; 
import logo from "./assets/images/logo.jpeg"; 


const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Novulair Logo" />
        {/* <span>NOVULAIR</span> */}
      </div>
      <input type="text" placeholder="Rechercher" className="search-bar" />
      <div className="user-info">
        <img src={me} alt="User Profile" className="user-image" />
        <span>Full Name</span>
      </div>
    </header>
  );
};

export default Header;
