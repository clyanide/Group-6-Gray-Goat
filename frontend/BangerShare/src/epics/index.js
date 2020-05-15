import { combineEpics } from "redux-observable";
import { getColor } from "./Color";

const rootEpic = combineEpics(getColor);

export default rootEpic;
