import { combineReducers } from 'redux';
import { fake } from './fake-reducer';
import {houseReducer} from './api-reducer';

const rootReducer = combineReducers({
  houses: houseReducer
});


export default rootReducer;
