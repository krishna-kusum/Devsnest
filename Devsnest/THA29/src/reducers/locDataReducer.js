const initialState = {};

const locDataReducer = (state = initialState, action) => {
  if (action.type === 'UPDATE_LOC_DATA') {
    return action.payload;
  }

  return state;
};

export default locDataReducer;
