import {combineReducers} from "redux";
import locReducer from './locReducer'
import locDataReducer from './locDataReducer'


const rootReducer = combineReducers({
  location: locReducer,
  locData : locDataReducer
})

export default rootReducer;