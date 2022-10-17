import React, { useState, useRef, useEffect } from "react";
import FlecheBas from "../assets/fleche-bas.svg";

const Accordeon = () => {
    // State
    const [toggle, setToggle] = useState(false);

    const refHeight = useRef();

    const [heightEl, setHeightEl] = useState();

    // Comportement
    const toggleAccordeon = () => {
        setToggle(!toggle);
    };

    useEffect(() => {
        setHeightEl(`${refHeight.current.scrollHeight}px`);
    }, []);

    // Affichage
    return (
        <div className="accordeon">
            <div className="accordeon-visible" onClick={toggleAccordeon}>
                <h2>Lorem ipsum dolor sit amet.</h2>
                <img src={FlecheBas} alt="Fleche" />
            </div>

            <div
                className={
                    toggle ? "accordeon-toggle animated" : "accordeon-toggle"
                }
                ref={refHeight}
                style={{height: toggle ? `${heightEl}`: 0}}
            >
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Possimus, quas ipsum adipisci mollitia nobis repellendus
                    veritatis natus distinctio odio quisquam? Quia cumque iusto
                    omnis a quod iste! Alias, accusantium nam!
                </p>
            </div>
        </div>
    );
};

export default Accordeon;
