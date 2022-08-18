import React from "react";
import s from './Button.module.css';

export const Button = (props) => {
    return (
        <button className={s.button}>
            <img className={s.button_icon} alt='' src={props.src}/>
            <div>{props.name}</div>
        </button>
    )
}