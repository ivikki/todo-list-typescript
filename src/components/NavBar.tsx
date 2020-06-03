import React from 'react';
import {Link} from 'react-router-dom';

export const NavBar: React.FC = () => {
    return(
        <nav>
            <div className="nav-wrapper purple accent-1 px1">
                <a href="/" className="brand-logo">React + TypeScript</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to="/">Список дел</Link></li>
                    <li><Link to="/about">Информация</Link></li>
                </ul>
            </div>
        </nav>
    )
};