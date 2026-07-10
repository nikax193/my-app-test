import React from 'react';
import './Aside.css';

function Aside() {
    return (
        <aside className="aside">
            <div className="categories">Categories</div>
            <nav className="nav">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </aside>
    );
};

export default Aside;