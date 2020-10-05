import { combineReducers } from "redux";
import general_reducer from "./general-reducer";

const rootReducer = combineReducers({
  general: general_reducer,
});

export default rootReducer;
