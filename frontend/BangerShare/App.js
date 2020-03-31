import React from "react";
import { Provider } from "react-redux";
import { store } from "./src/store";
import BangerShareApp from "./src/BangerShareApp";

export default function App() {
  return (
    <Provider store={store}>
      <BangerShareApp />
    </Provider>
  );
}
