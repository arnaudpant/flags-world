import React from "react";
import Navigation from "../components/Navigation";
import Logo from '../components/Logo';
import Modal from "../components/Modal/Modal";

const About = () => {
    return (
        <div>
            <Logo />
            <Navigation />
            <h1>A propos</h1>
            <p>
                Site code en React, utilisant une API et deploye avec Netlify
            </p>
            <Modal />
        </div>
    );
};

export default About;
