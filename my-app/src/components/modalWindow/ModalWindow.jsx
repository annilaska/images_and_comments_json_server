import React, { useEffect, useState } from "react";
import './ModalWindow.scss';
import { Button } from "../button/Button";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchCardThunk, addCommentThunk } from '../../store/slices/cardSlice'

const ModalWindow = () => {
    let { imageId } = useParams()

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleClick = () => {
        navigate('/')
    }

    useEffect(() => {
        dispatch(fetchCardThunk(imageId))
    }, [dispatch])

    const cardId = useSelector(state => state.cardSection.id)
    const cardImage = useSelector(state => state.cardSection.imageUrl)
    const cardComments = useSelector(state => state.cardSection.comments)


    const addComment = (value) => {
        const cardData = new FormData()
        cardData.cardId = cardId
        cardData.cardImage =  cardImage
        cardData.newComments = [...cardComments, value]
        dispatch(addCommentThunk(cardData))
    }

    return (
        <div className='background'>
            <div className='modalWindowSection'>
                <div onClick={handleClick} className='modalWindowSection_backButton'>
                    <Button name='Back' />
                </div>
                <div className='modalWindowSection_imageWrapper'>
                    <img className='modalWindowSection_image' src={cardImage} alt=''></img>
                </div>
                <div className='comments'>
                    {(cardComments.length !== 0) ? (
                        <>
                            {
                                cardComments.map(comment => {
                                    return (
                                        <div className='span' key={comment}>- {comment}</div>
                                    )
                                })
                            }
                        </>
                    )
                        : (<div className='span'>not comments yet</div>)

                    }
                </div>
                <div className='form'>
                    <AddCommenForm addComment={addComment} />
                </div>
            </div>
        </div>
    )

};


const AddCommenForm = ({ addComment }) => {
    const [value, setValue] = useState('')
    const handleClick = (e) => {
        e.preventDefault()
        if(value !== '') {
            addComment(value)
        }
        setValue('')
    }
    return (
        <form className='commentsBlock'>
            <div className='textField'>
                <label className='lable'>
                    <textarea
                        className='textarea'
                        id='text'
                        onChange={(e) => setValue(e.target.value)}
                        value={value}
                    />
                    Write a few sentences about the photo.
                </label>
            </div>
            <div>
                <button onClick={(e) => handleClick(e)} className='saveButton'>Save</button>
            </div>
        </form>
    )
}


export default ModalWindow;


