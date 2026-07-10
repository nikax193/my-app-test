import React from 'react';
import './Aside.css';

function Aside() {
    return (
        <aside className="aside">
            <div className="categories">Categories</div>
            <nav className="aside-nav-links">
                <ul>
                    <li><a href="/phones">Phones</a></li>
                    <li><a href="/laptops">Laptops</a></li>
                    <li><a href="/accessories">Accessories</a></li>
                </ul>
            </nav>
        </aside>
    );
};

export default Aside;