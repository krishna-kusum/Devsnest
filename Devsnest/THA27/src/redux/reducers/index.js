import todoReducers from './todoReducers';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  todo: todoReducers
});

export default rootReducer;
