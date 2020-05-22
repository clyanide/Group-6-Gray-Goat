import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import "./App.css";
import BangerShareApp from "./BangerShareApp";
import MusicPlayer from "./containers/MusicPlayer";

function App() {
  return (
    <Provider store={store}>
      <BangerShareApp />
      <div style={{ position: "fixed", bottom: "0%", width: "100%" }}>
        <MusicPlayer />
      </div>
    </Provider>
  );
}

export default App;
