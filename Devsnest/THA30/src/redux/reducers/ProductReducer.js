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
