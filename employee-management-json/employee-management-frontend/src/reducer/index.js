import { combineReducers } from "redux";
import ErrorReducer from "./ErrorReducer";
import departmentReducer from "./departmentReducer";

const rootReducer = combineReducers({
    errorsReducerContent: ErrorReducer,
    departmentReducerContent: departmentReducer
});

export default rootReducer;
