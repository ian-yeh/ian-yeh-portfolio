// src/components/Header/Header.tsx

//import React from 'react'; // Add this line
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link className="header-text" to="/">&lt;IAN.YEH/&gt;</Link>
      </div>
      <nav className="nav">
        <ul>
          <li>
            <Link className="header-text" to="/">(HOME)</Link>
          </li>
          <li>
            <Link className="header-text" to="/about">(ABOUT)</Link>
          </li>
          <li>
            <Link className="header-text" to="/contact">(CONTACT)</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
