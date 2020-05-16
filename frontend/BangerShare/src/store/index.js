import { applyMiddleware, createStore } from "redux";
import rootReducer from "../reducers";
import rootEpic from "../epics";
import { createEpicMiddleware } from "redux-observable";
import logger from "redux-logger";

const epicMiddleware = createEpicMiddleware();

export const store = createStore(
  rootReducer,
  applyMiddleware(logger, epicMiddleware)
);

epicMiddleware.run(rootEpic);
