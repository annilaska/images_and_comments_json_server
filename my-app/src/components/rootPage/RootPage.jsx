import React, { useEffect } from "react";
import { NavLink} from "react-router-dom";
import Header from "../header/Header";
import "./RootPage.scss";
import { fetchImagesThunk } from '../../store/slices/imagesSlice'
import Preloader from "../preloader/Preloader";
import { useDispatch, useSelector } from "react-redux";


const RootPage = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchImagesThunk())
    }, [dispatch])

    const imagesCollection = useSelector(state => state.imagesListSection.imagesList)
    const loader = useSelector(state => state.imagesListSection.isloading)

    return (
       <>
            <Header />
            {loader === true && <Preloader />}
            <div className='images'>
            {
                imagesCollection.map(image => <div className='images_card' key={image.id}>
                    <NavLink to={'/' + image.id}>
                        <div className='imageWrapper'>
                            <img 
                                className='image'
                                src={image.imageUrl != null ? image.imageUrl : '2'} 
                                alt=''
                            >
                            </img>
                        </div>
                    </NavLink>
                    <div className='images_id'>id: {image.id}</div>
                </div>)
            }
        </div>
       </>
    )
};


export default RootPage;