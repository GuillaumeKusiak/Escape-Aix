import React from 'react';

const Introduction = props => {
    return (
        <header className={"introduction"}>
            <h2 className={"intro-h1"}>
                {props.firstTitle} <span>{props.mainTitle}</span>
            </h2>
            <p className={"intro-p"}>
                {props.description}
            </p>
        </header>
    );
};

export default Introduction;

/*
<header className={"introduction"}>
            <h2 className={"intro-h1"}>
                Notre entreprise de création<span> d'Escape Game Numérique</span>
            </h2>
            <p className={"intro-p"}>
                Escape Aix est une start-up situé à Aix-en-Provence,<br/>
                vous proposant de nombreux escape game immersif en ligne.
            </p>
        </header>


 */