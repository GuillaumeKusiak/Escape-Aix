import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faComment} from "@fortawesome/free-solid-svg-icons";
import {faHashtag} from "@fortawesome/free-solid-svg-icons";

const Networks = () => {
    return (
        <section className={"networks"}>
            <div className={"mail"}>
                <FontAwesomeIcon className={"fontIcon"} icon={faEnvelope}/>
                <a href={"mailto:escape.aix.pro@gmail.com"} target={"_blank"}>Contact par email</a>
            </div>
            <div className={"twitter"}>
                <FontAwesomeIcon className={"fontIcon"} icon={faComment}/>
                <a href={"https://twitter.com/AixEscape"} target={"_blank"}>Contact par twitter</a>
            </div>
            <div className={"instagram"}>
                <FontAwesomeIcon className={"fontIcon"} icon={faHashtag}/>
                <a href={"https://instagram.com/escapeaix?utm_medium=copy_link"} target={"_blank"}>Contact par instagram</a>
            </div>
        </section>
    );
};

export default Networks;