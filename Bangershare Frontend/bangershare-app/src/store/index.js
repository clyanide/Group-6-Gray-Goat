import { applyMiddleware, createStore } from "redux";
import createRootReducer from "../reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import thunk from 'redux-thunk';


export const history = createBrowserHistory();

export const store = createStore(
  createRootReducer(history),
  composeWithDevTools(applyMiddleware(
    thunk,
    routerMiddleware(history)
  ))
);

