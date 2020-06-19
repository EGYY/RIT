import {combineReducers} from "redux";
import testReducer from "./reducers/testReducer";

const rootRedeucer = combineReducers({
    testReducer
});

export default rootRedeucer;