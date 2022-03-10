import React from 'react';
import {NavLink} from "react-router-dom";

const Footer = () => {

    const moveNavLink = (e) => {
        let links = document.querySelectorAll(".others-links a");
        links.forEach(element => element.addEventListener('mouseover',() => {
            element.style.paddingLeft = '1em';
        }));

        links.forEach(element => element.addEventListener('mouseout', () => {
            element.style.paddingLeft = '0';
        }));
    }



    return (
        <footer className={"footer"}>

            {/* Copyright */}
            <section className={"copyright"}>
                <h2>Escape Aix</h2>
                <h2>Projet();2022</h2>
            </section>
            {/* others links */}
            <section className={"others-links"}>
                <h2>Nos différents liens :</h2>
                <ul>
                    <li onMouseOver={moveNavLink}><NavLink to={"/"}>Accueil</NavLink></li>
                    <li onMouseOver={moveNavLink}><NavLink to={"/nos-scenarios"}>Nos scénarios</NavLink></li>
                    <li onMouseOver={moveNavLink}><NavLink to={"/a-propos"}>A propos</NavLink></li>
                    <li onMouseOver={moveNavLink}><NavLink to={"/contact"}>contact</NavLink></li>
                </ul>
            </section>
        </footer>
    );
};

export default Footer;