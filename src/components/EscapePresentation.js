import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const EscapePresentation = (props,state) => {

    let description1 = props.description;
    let moreInfos = props.moreInfos;

    const [infos, setInfos] = useState(description1);
    let iconButton;
    if (infos == description1){
        iconButton = <FontAwesomeIcon icon={faArrowRight} />;
    } else {
        iconButton = <FontAwesomeIcon icon={faArrowLeft} />;
    }

    const showInfos = () => {
        if (infos == description1) {
            setInfos(moreInfos);
        } else {
            setInfos(description1);
        }
    }

    return (
        <section className={"nos-scenario"}>
            <div className={"first"}>
                <img className={"picture"} src={props.link} alt={"image"}/>
                <p className={"time"}>{props.time} min</p>
                <p className={"lang"}>{props.lang}</p>
                <p className={"player"}>{props.player} joueur(s)</p>
                <a href={"https://view.genial.ly/61ef12452dd7bf001347b3d0/interactive-content-la-chute-des-multinationales"} className={"play"} target={"_blank"} rel={"noreferrer"} >Jouer !</a>
                <p className={"purpose"}>- {props.firstPurpose}</p>
                <p className={"purpose"}>- {props.secondPurpose}</p>
            </div>
            <div className="description">
                <h3 className="title-first">{props.title}</h3>
                <p className="para-first">{infos}</p>
                <button className={"button"} onClick={showInfos}>
                    {iconButton}
                </button>
            </div>
        </section>
    );
};

export default EscapePresentation;