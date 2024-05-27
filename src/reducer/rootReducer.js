
import { combineReducers } from 'redux';


import counterReducer from './counterReducer';


const rootReducer = combineReducers({

    counter: counterReducer,

});

//higher order component
export default rootReducer;