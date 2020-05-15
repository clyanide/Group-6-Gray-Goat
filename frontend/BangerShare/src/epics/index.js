import { combineEpics } from "redux-observable";
import { getColor } from "./Color";
import { registerUser } from "./User"

const rootEpic = combineEpics(getColor, registerUser);

export default rootEpic;
