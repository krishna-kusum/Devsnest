const initialState = [];

const todoReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, action.payload];

    case 'DELETE_ITEM':
      return state.filter((item, index) => index != action.payload);

    case 'CLEAR_DATA':
      return initialState;

    case 'LOAD_DATA':
      return action.payload.slice(0, 6);

    default:
      return state;
  }
};

export default todoReducers;
