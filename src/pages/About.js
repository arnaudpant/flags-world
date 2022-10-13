import React from "react";
import Navigation from "../components/Navigation";
import Logo from '../components/Logo';
import Modal from "../components/Modal/Modal";
import Accordeon from "../components/Modal/Accordeon";
import Navbar from "../components/Navbar";

const About = () => {
    return (
        <div>
            <Navbar />
            <Logo />
            <Navigation />
            <h1>A propos</h1>
            <p>
                Site code en React, utilisant une API et deploye avec Netlify
            </p>
            <Modal />
            <Accordeon />

        </div>
    );
};

export default About;
