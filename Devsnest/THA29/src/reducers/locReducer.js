const initialState = ""

const locReducer = (state = initialState, action) => {

  if(action.type === "UPDATE_LOCATION"){
    return action.payload
  }

  return state;
}

export default locReducer;