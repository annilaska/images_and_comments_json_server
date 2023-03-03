import React from "react";
import './Preloader.scss';


const Preloader: React.FC = () => {
    return (
        <div className='preloader_wrapper'>
            <span className='preloader_text'>Loading...</span>
        </div>
    )
};


export default Preloader