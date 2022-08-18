import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../header/Header";
import s from "./RootPage.module.css";


const RootPage = ({ imagesList }) => {

   
    return (
       <div>
            <Header />
            <div className={s.images}>
            {
                imagesList.map(image => <div className={s.images_card} key={image.id}>
                    <NavLink to={'/' + image.id}>
                        <div className={s.imageWrapper}>
                            <img className={s.image}
                            src={image.url != null ? image.url : '2'} alt=''>
                            </img>
                        </div>
                    </NavLink>
                    <div className={s.images_id}>id: {image.id}</div>
                </div>)
            }
        </div>
       </div>
    )
};


export default RootPage;