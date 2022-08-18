import { combineReducers, legacy_createStore as createStore, applyMiddleware} from 'redux';
import rootReducer from './rootReducer';
import ModalWindowReducer from './ModalWindowReducer';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';


let reducers = combineReducers({
    rootPage: rootReducer,
    ModalWindow: ModalWindowReducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware)
    );


window.store = store;

export default store;