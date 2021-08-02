import { updateFirstName, updateLastName } from './userFormActionTypes';

const initialState = {
  firstName: '',
  lastName: ''
};

const userFormReducer = (state = initialState, action) => {
  // console.log(action);
  switch (action.type) {
    case updateFirstName:
      return {
        ...state,
        firstName: action.payload
      };

    case updateLastName:
      return {
        ...state,
        lastName: action.payload
      };

    default:
      return state;
  }
};

export default userFormReducer;
