import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import BangerShareApp from "./BangerShareApp"

function App() {
  return (
    <Provider store={store}>
      <BangerShareApp />
    </Provider>
  );
}

export default App;
