import React from "react";
import s from './Preloader.module.css';
import loader from '../../assets/ghost.gif'


const Preloader = () => {
    return (
        <div className={s.preloader_wrapper}>
            <img src={loader} alt=''/>
            <span className={s.preloader_text}>Loading...</span>
        </div>
    )
};


export default Preloader