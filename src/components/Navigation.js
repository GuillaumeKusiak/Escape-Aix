import React from 'react';
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return (
        <nav className={"navigation"}>
            <ul>
                <li>
                    <NavLink to={"/"} onClick={window.scrollTo(0, 0)}>
                        Accueil
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/nos-scenarios"} onClick={window.scrollTo(0, 0)}>
                        Nos scénarios
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/a-propos"} onClick={window.scrollTo(0, 0)}>
                        A propos
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/contact"} onClick={window.scrollTo(0, 0)}>
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;