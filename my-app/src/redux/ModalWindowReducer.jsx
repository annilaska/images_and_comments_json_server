import { elementsAPI } from '../api/Api';
const setImageCard = 'SET-IMAGES-CARD';
const loadingToggle = 'LOADING-TOGGLE';
const sendComment = 'SEND-COMMENT';



let initialState = {
    id: null,
    url: null,
    comments: [],
    isloading: false
};



const ModalWindowReducer = (state = initialState, action) => {

    switch (action.type) {

        case setImageCard: {
    
            return {
                ...state,
                ...action.data,
                isloading: false
            }
        }

        case loadingToggle: {
            return {
                ...state,
                isloading: action.loader
            }
        }
        
        case sendComment: {
            
            return {
                ...state,
                comments: [...state.comments, { text: action.newComment}]
            }
        }

        default:
            return state;
    }
};

export const setCard = (id, url, comments) => ({ type: setImageCard, data: {id, url, comments} });
export const load = (loader) => ({ type: loadingToggle, loader});
export const setComment = (newComment) => ({ type: sendComment, newComment})


export const getCard = (imageId) => {
    return (dispatch) => {

    dispatch(load(true))
   
    elementsAPI.getLargeImagesAndComments(imageId)
        .then(data => {
            
            let {id, url, comments} = data
            dispatch(load(false))
            dispatch(setCard(id, url, comments));
        })
    }
}

export const updateComments = (id, newComment) => {
    return (dispstch) => {
        elementsAPI.addComments(id, newComment)
        .then(data => {
            
            if (data.resultCode === 204 ) {
                dispstch(setComment(newComment));
    
            }
            if (data.length === 0) {
                dispstch(setComment('new comment.....'));
            }
        })
        dispstch(setComment(newComment));

    }
}



export default ModalWindowReducer;