import { combineReducers } from 'redux';
import { productReducer } from './ProductReducer';

const rootReducer = combineReducers({
  allProducts: productReducer
});

export default rootReducer