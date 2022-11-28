import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    // States
    const [toggleMenu, setToggleMenu] = useState(false);
    const [largeurEcran, setLargeurEcran] = useState(window.innerWidth);

    // Comportement

    const toggleNav = () => {
        setToggleMenu(!toggleMenu);
    };

    useEffect(() => {
        const changeWidth = () => {
            setLargeurEcran(window.innerWidth);
        };

        window.addEventListener("resize", changeWidth);

        return () => {
            window.removeEventListener("resize", changeWidth);
        };
    }, []);

    // Affichage
    return (
        <nav>
            {(toggleMenu || largeurEcran > 500) && (
                <ul className="liste">
                    <NavLink
                        to="/index.html"
                        className={(nav) => (nav.isActive ? "nav-active" : "")}
                    >
                        <li>Accueil</li>
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={(nav2) =>
                            nav2.isActive ? "nav-active" : ""
                        }
                    >
                        <li>A propos</li>
                    </NavLink>
                    <NavLink
                        to="/blog"
                        className={(nav3) =>
                            nav3.isActive ? "nav-active" : ""
                        }
                    >
                        <li>Blog</li>
                    </NavLink>
                </ul>
            )}
            <button className="btn" onClick={toggleNav}>
                BTN
            </button>
        </nav>
    );
};

export default Navbar;
