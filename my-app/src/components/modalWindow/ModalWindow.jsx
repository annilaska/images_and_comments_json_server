import React from "react";
import s from './ModalWindow.module.css';
import { reduxForm, Field } from "redux-form";
import { Button } from "../button/Button";


class ModalWindow extends React.Component {



    handleClick = () => {
        this.props.navigate('/')
    }

    

  

    componentDidUpdate () {
        this.addComment = ( values) => {
            let id = this.props.id
            this.props.updateComments(id, values.newComment)
            values.newComment = ''
        }
    }

    render() {

        return (
            <div className={s.background}>
                <div className={s.modalWindowSection}>
                    <div onClick={this.handleClick} className={s.modalWindowSection_backButton}>
                        <Button name='Back' />
                    </div>
                    <div className={s.modalWindowSection_imageWrapper}>
                        <img className={s.modalWindowSection_image} src={this.props.url} alt=''></img>
                    </div>
                    <div className={s.comments}>

                        {(this.props.comments.length !== 0) ? (
                            <>
                                {
                                    Object.values(this.props.comments).map(comment => {

                                        return (
                                            <div className={s.span} key={comment.id}>{comment.text}</div>
                                        )
                                    })
                                }
                            </>
                        )
                            : (<div className={s.span}>not comments yet</div>)

                        }
                    </div>
                    <div className={s.form}>
                        <AddCommentReduxForm 
                        onSubmit={this.addComment} />
                    </div>
                </div>
            </div>
        )
    }
};


const AddCommentForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.commentsBlock}>
            <div className={s.textField}>
                <label className={s.lable}>
                <Field
                    component='textarea'
                    name='newComment'
                    className={s.textarea}
                    id='text'
                    />
                    Write a few sentences about the photo.
                </label>
            </div>
            <div>
                <button className={s.saveButton}>Save</button>
            </div>
        </form>
    )
}

const AddCommentReduxForm = reduxForm({ form: 'commentsForm' })(AddCommentForm)


export default ModalWindow;


