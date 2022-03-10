import React from 'react';

const Box = props => {
    return (
        <div className={"box"}>
            <img src={props.link} alt={"image pédagogique"}/>
            <h3 className="box-title">{props.title}</h3>
            <p className="box-paragraph">{props.description}</p>
        </div>
    );
};

export default Box;