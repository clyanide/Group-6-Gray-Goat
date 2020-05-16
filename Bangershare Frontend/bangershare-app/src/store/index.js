import { applyMiddleware, createStore } from "redux";
import rootReducer from "../reducers";
import rootEpic from "../epics";
import { createEpicMiddleware } from "redux-observable";
import { composeWithDevTools } from "redux-devtools-extension";

const epicMiddleware = createEpicMiddleware();

export const store = createStore(
    rootReducer, composeWithDevTools(
        applyMiddleware(epicMiddleware)
    )
);

epicMiddleware.run(rootEpic);