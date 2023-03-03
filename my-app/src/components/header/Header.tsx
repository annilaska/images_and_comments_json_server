import React from "react";
import banner from '../../assets/background1.jpg';
import avatar from '../../assets/ava.jpg';
import './Header.scss';
import { Button } from "../button/Button";
import phone from '../../assets/Phone.svg';
import mail from '../../assets/Mail.svg'


const Header: React.FC = () => {
    return (
        <div className='header'>
            <img className='header_bunnerWrapper' src={banner} alt='' />
            <div className='header_userInfo'>

                <div className='userAvaAndName'>
                    <img className='ava' src={avatar} alt=''/>
                    <span className='userName'>Here is your name</span>
                </div>
                <div className='buttons'>
                    <Button  src={mail} name='Message' />
                    <Button  src={phone} name='Call' />
                </div>
                
            </div>
        </div>
    )
};


export default Header;