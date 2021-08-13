import { combineReducers } from 'redux';
import { productReducer, selectedProductReducer, loadToCart } from './ProductReducer';

const rootReducer = combineReducers({
  allProducts: productReducer,
  product : selectedProductReducer,
  cartProducts : loadToCart

});

export default rootReducer