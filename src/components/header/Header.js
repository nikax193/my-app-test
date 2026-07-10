import React from 'react';
import './Header.css';

function Header() {
  return (
    <header>
        <div className="logo">MS</div>
        <h2 className="title">My Shop </h2>
         <nav className="nav">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Products</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    </header>
  );
};

export default Header;