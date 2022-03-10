import React from 'react';
import Navigation from "../components/Navigation";
import Presentation from "../components/Presentation";
import Introduction from "../components/Introduction";
import BorderAnimation from "../components/BorderAnimation";
import EscapePresentation from "../components/EscapePresentation";

import background1 from "../assets/img/La-Chute-des-multinationales.png";
import Footer from "../components/Footer";

const Scenarios = () => {
    return (
        <div>
            <Navigation />
            <Presentation />
            <main className={"main"}>
                <Introduction
                    firstTitle={"Nos scénarios exclusivement "}
                    mainTitle={"numérique"}
                />
                <BorderAnimation />
                <EscapePresentation
                    link={background1}
                    title={"La chute des multinationales"}
                    time={"45"}
                    lang={"Français"}
                    player={"1"}
                    firstPurpose={"S'introduire dans le réseau informatique d'RACleaner"}
                    secondPurpose={"Lever le doute sur la rumeur"}
                    description={
                        <text>
                            L’histoire tourne autour d’un certain « iTrooz », un passionné d’informatique, qui s’est spécialisé dans le domaine de la cybersécurité.<br/>
                            Durant son temps libre, iTrooz s’attaque aux grandes multinational qui polluent notre Terre.
                            Pendant plusieurs heures, cet hacker passionné tente de s’introduire dans leur base de données pour y trouver des informations compromettantes,
                            mettant fin à leurs activités nocives.<br/>
                            Un jour, une rumeur courra sur le dark web concernant « RACleaner » à propos d’une cargaison massive de déchets radioactifs dans le désert
                            alors que la multinational promet de les faire disparaitre de manière non polluante grâce à leur technologie « révolutionnaire ».
                        </text>
                    }
                    moreInfos={
                        <text>
                            Infiltrez-vous dans le réseaux d'RACleaner, en résolvant différents énigmes. <br/>
                            Elles sont essentielles pour résoudre cette rumeur.<br/><br/>
                            Conseils avant de jouer :<br/>
                            <ul>
                                <li>Munissez-vous d'une feuille pour noter les informations</li>
                                <li>Vous pouvez réaliser cet escape game avec d'autres joueurs</li>
                            </ul>
                        </text>
                    }
                />
            </main>
            <Footer />
        </div>
    );
};

export default Scenarios;