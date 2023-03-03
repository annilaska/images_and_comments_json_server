import React from "react";
import './Button.scss';

type PropsType = {
    src: string,
    name: string
}

export const Button: React.FC<PropsType> = (props) => {
    return (
        <button className='button'>
            <img className='button_icon' alt='' src={props.src}/>
            <div>{props.name}</div>
        </button>
    )
}