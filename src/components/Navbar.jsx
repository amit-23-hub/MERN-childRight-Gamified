import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navigation-bar">
      <div className="logosss-container">
        <Link to="/">RightEXP</Link>
        <button className="menutoggle" onClick={toggleMenu}>
          <i className="fa fa-bars" style={{ color: '#ffffff' }}></i>
        </button>
      </div>
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <Link to="/"><i className="fa-solid fa-house" style={{ color: '#ffffff' }}></i> Home </Link>
        <Link to="/gov"><i className="fa-solid fa-snowflake fa-spin" style={{ color: '#ffffff' }}></i> Current Policies of Government</Link>
        <Link to="/NyayGuru"><i className="fa-solid fa-snowflake fa-spin" style={{ color: '#ffffff' }}></i> NyayGuru</Link>
        <Link to="/dictionary"><i className="fa-solid fa-book fa-bounce" style={{ color: '#ffffff' }}></i> Dictionary </Link>
        <Link to="/chatbot"><i className="fa-solid fa-robot" style={{ color: '#ffffff' }}></i> Chatbot</Link>
        <Link to="/hindi"><i className="fa-solid fa-language" style={{ color: '#ffffff' }}></i> हिन्दी मे देखे</Link>
      </div>
    </nav>
  );
}

export default Navbar;




