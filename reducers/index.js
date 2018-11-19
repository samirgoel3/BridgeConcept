import { combineReducers } from "redux";
import ReducerOne from "./ReducerOne";
import MainScreenReducer from "./ReducerMainScreen";

export default combineReducers({
  mkey: ReducerOne, // that is acceable via this key
  MainScreenReducer: MainScreenReducer
});
