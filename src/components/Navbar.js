import React, { useState, useEffect } from "react";

const Navbar = () => {
    // States
    const [toggleMenu, setToggleMenu] = useState(false);
    const [largeurEcran, setLargeurEcran] = useState(window.innerWidth);

    // Comportement

    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }

    useEffect( () => {
        const changeWidth = () => {
            setLargeurEcran(window.innerWidth)
        };

        window.addEventListener('resize', changeWidth);


        return () => {
            window.removeEventListener('resize', changeWidth);
        }
    }, [] )

    // Affichage
    return (
        <nav>
            {(toggleMenu || largeurEcran > 500) && (
                <ul className="liste">
                    <li className="items">Accueil</li>
                    <li className="items">Contact</li>
                </ul>
            )}
            <button className="btn" onClick={toggleNav}>BTN</button>
        </nav>
    );
};

export default Navbar;
