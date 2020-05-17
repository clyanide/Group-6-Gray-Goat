import { applyMiddleware, createStore } from "redux";
import createRootReducer from "../reducers";
import rootEpic from "../epics";
import { createEpicMiddleware } from "redux-observable";
import { composeWithDevTools } from "redux-devtools-extension";
import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'

const epicMiddleware = createEpicMiddleware();

export const history = createBrowserHistory();

export const store = createStore(
  createRootReducer(history),
  composeWithDevTools(applyMiddleware(
    epicMiddleware,
    routerMiddleware(history)
  ))
);

epicMiddleware.run(rootEpic);
