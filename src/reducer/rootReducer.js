
import { combineReducers } from 'redux';


import counterReducer from './counterReducer';
import userReducer from './userReducer';


const rootReducer = combineReducers({
    user: userReducer,
    counter: counterReducer,

});

//higher order component
export default rootReducer;