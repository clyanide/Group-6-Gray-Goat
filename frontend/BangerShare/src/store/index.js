import { applyMiddleware, createStore } from "redux";
import rootReducer from "../reducers";
import { persistStore, persistReducer } from "redux-persist";
import { AsyncStorage } from "react-native";
import logger from "redux-logger";

// Configures AsyncStorage which allows state to be saved locally on the device
const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, applyMiddleware(logger));
export const persistor = persistStore(store);
