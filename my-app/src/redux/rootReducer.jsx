import { elementsAPI } from '../api/Api';


const setImagesList = 'SET-IMAGES-LIST';
const loadingToggle = 'LOADING-TOGGLE';



let initialState = {
    imagesList: [],
    isloading: false
};



const rootReducer = (state = initialState, action) => {

    switch (action.type) {

        case setImagesList: {

            return {
                ...state,
                imagesList: action.images
            }
        }

        case loadingToggle: {
            return {
                ...state,
                isloading: action.loader
            }
        }

        default:
            return state;
    }
};

export const setImages = (images) => ({ type: setImagesList, images });
export const load = (loader) => ({ type: loadingToggle, loader})

export const getImages = () => {
    return (dispatch) => {

        dispatch(load(true))
        elementsAPI.getImagesList()
            .then(data => {
                dispatch(load(false))
                dispatch(setImages(data));
            })
    }
}




export default rootReducer;