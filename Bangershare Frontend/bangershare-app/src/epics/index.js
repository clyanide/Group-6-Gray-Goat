import { combineEpics } from "redux-observable";
import { registerUser, loginUser } from "./User";

const rootEpic = combineEpics(registerUser, loginUser);

export default rootEpic;
