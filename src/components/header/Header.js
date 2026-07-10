import React from 'react';
import './Header.css';

function Header() {
  return (
    <header>
      <div className="left-header-content"> 
          <div className="logo">MS</div>
          <h2 className="title">My Shop </h2>
      </div>
       
         <nav className="nav">
            <ul>
                <li><a href="/home">Home</a></li>
                <li><a href="/product">Products</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    </header>
  );
};

export default Header;