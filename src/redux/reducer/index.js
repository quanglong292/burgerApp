import { combineReducers } from "redux";
import xucxacReducer from "./xucxacReducer";
import userReducer from "./userReducer";
import BurgerReducer from "./burgerReducer";

const rootReducer = combineReducers({
    // reducer con
    xucxacReducer,
    userReducer,
    BurgerReducer,
});

export default rootReducer;