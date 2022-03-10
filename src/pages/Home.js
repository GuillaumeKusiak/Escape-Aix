import React from 'react';
import Navigation from "../components/Navigation";
import Presentation from "../components/Presentation";
import Introduction from "../components/Introduction";
import BorderAnimation from "../components/BorderAnimation";
import Box from "../components/Box";

// Image
import icon1 from "../assets/img/icon-developpement-durable.png";
import icon2 from "../assets/img/display.png";
import Footer from "../components/Footer";


const Home = () => {
    return (

        <div>
            <Navigation />
            <Presentation />
            <main className={"main"}>
                <Introduction
                    firstTitle={"Notre entreprise de création"}
                    mainTitle={"d'Escape Game Numérique"}
                    description={<text>
                        Escape Aix est une start-up situé à Aix-en-Provence,<br/>
                        vous proposant de nombreux escape game immersif en ligne.
                    </text>}


                /> {/* For introduction */}
                <BorderAnimation /> {/* For border animation */}
                <section className={"container"}>
                    <Box title={"Pédagogique"} link={icon1}
                         description={<text>
                             Notre entreprise réalise des escapes games pédagogiques. En effet, notre slogant est
                             d'apprendre en jouant, ce qui signifie que vous pourrez augmenter votre culture générale avec nos jeux.
                             De plus, en raison des diffilcultés liés avec le développement durable, nous nous devons de réaliser des
                             escapes games numérique en lien avec cette thématique.
                    </text>}

                    />
                    <Box title={"Numérique"} link={icon2}
                         description={<text>
                             Nous proposons des escapes games exlusivement numérique. Pourquoi ?
                             Tout simplement parce qu'il y a aucune limite avec la virtualisation.
                             Le nombre de participants peut être très variable, entre 1 à aucune limte de joueur.
                             Autre caractéristque très importante, l'escape game numérique n'a ni de limite temporelle, ni de limite spatiale.
                         </text>}
                    />
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Home;