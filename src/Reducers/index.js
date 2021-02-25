import { combineReducers } from "redux";
import ContactReducers from "./ContactReducers";

export default combineReducers({
    allContact: ContactReducers,
});
