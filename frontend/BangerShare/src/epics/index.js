import { combineEpics } from "redux-observable";
import { getColor } from "./Color";
import { registerUser, loginUser } from "./User"

const rootEpic = combineEpics(getColor, registerUser, loginUser);

export default rootEpic;
