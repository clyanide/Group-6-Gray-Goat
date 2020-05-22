import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import "./App.css";
import BangerShareApp from "./BangerShareApp";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { deepPurple, deepOrange } from "@material-ui/core/colors";
import MusicPlayer from "./containers/MusicPlayer";

const BangerShareTheme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      // Purple and green play nicely together.
      main: deepPurple[600],
      contrastText: "#fff",
    },
    secondary: {
      main: "#ff3d00",
    },
  },
  typography: {
    fontFamily: "Segoe UI",
  },
});

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={BangerShareTheme}>
        <BangerShareApp />
        <div style={{ position: "fixed", bottom: "0%", width: "100%" }}>
          <MusicPlayer />
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
