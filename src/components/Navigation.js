import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <div className="navigation">
                <ul>
                    <NavLink to="/" className={ (nav) => (nav.isActive ? "nav-active" : "stopa") }>
                        <li>accueil</li>
                    </NavLink>
                    <NavLink to="/about" className={ (nav) => (nav.isActive ? "nav-active" : "stopb") }>
                        <li>a propos</li>
                    </NavLink>
                </ul>

            </div>
        </div>
    ); 
};

export default Navigation;