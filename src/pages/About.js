import React from 'react';
import Navigation from "../components/Navigation";
import Presentation from "../components/Presentation";
import Footer from "../components/Footer";

const About = () => {
    return (
        <div>
            <Navigation />
            <Presentation />
            <section className="apropos">
                <header>
                    <h2 className="teams">L'équipe</h2>
                    <p className="para-infos">Nous sommes des étudiants de première année en BUT informatique sur le site d'Aix-en-provence.</p>
                    <p className="para-infos">En lien avec la Situation d'apprentissage et d'évaluation numéro 6, proposé par notre étabilissement, nous avons
                    réalisé, en petit groupe, un escape game numérique en lien avec le piratage. Par la suite, nous avons élaboré une stratégie de communication.</p>
                </header>
                <h2 className="teams">Présidents Directeurs Généraux :</h2>
                <ul className="authors">
                    <li>GONZALES Lenny</li>
                    <li>SAUVA Mathieu</li>
                    <li>KUSIAK Guillaume</li>
                </ul>
            </section>
            <Footer />
        </div>
    );
};

export default About;