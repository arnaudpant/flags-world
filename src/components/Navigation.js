import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <div className="navigation">
                <ul>
                    <NavLink to="/index.html" className={ (nav) => (nav.isActive ? "nav-active" : "") }>
                        <li>Accueil</li>
                    </NavLink>
                    <NavLink to="/about" className={ (nav2) => (nav2.isActive ? "nav-active" : "") }>
                        <li>A propos</li>
                    </NavLink>
                    <NavLink to="/blog" className={ (nav3) => (nav3.isActive ? "nav-active" : "") }>
                        <li>Blog</li>
                    </NavLink>
                </ul>

            </div>
        </div>
    ); 
};

export default Navigation;