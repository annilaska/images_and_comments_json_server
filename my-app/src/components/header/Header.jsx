import React from "react";
import banner from '../../assets/Banner-image.jpg';
import avatar from '../../assets/Avatar-profile.jpg';
import s from './Header.module.css';
import { Button } from "../button/Button";
import phone from '../../assets/Phone.svg';
import mail from '../../assets/Mail.svg'


const Header = () => {
    return (
        <div className={s.header}>
           
            <img className={s.header_bunnerWrapper} src={banner} alt='' />
           
            <div className={s.header_userInform}>

                <div className={s.userAvaAndName}>
                    <img className={s.ava} src={avatar} alt=''/>
                    <span className={s.userName}>Ricardo Cooper</span>
                </div>
                <div className={s.buttons}>
                    <Button  src={mail} name='Message' />
                    <Button  src={phone} name='Call' />
                </div>
                
            </div>
        </div>
    )
};


export default Header;