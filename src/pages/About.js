import React from "react";
import Navigation from "../components/Navigation";
import Logo from '../components/Logo';
import Navbar from "../components/Navbar";

const About = () => {
    return (
        <div>
            <Navbar />
            <Logo />
            <Navigation />
            <h1>A propos</h1>
            <p>
                Site codé avec React, utilisant une API et deployé avec Netlify.
            </p>
        </div>
    );
};

export default About;
