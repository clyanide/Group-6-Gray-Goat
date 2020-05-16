import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store";
import HomePage from "./components/HomePage";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HomePage />
      </div>
    </Provider>
  );
}

export default App;
