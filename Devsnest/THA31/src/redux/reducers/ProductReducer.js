import { ActionTypes } from '../constants/action-types';

const initialState = {
  products: []
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: action.payload };

    default:
      return state;
  }
};

// {
//   id: 1,
//   title: 'Krishna',
//   category: 'Developer'
// }

export const selectedProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...action.payload };

    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};

    default:
      return state;
  }
};

export const loadToCart = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.LOAD_TO_CART:
      return { ...state, products: [...state, ...action.payload] };

    default:
      return state;
  }
}
