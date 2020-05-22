import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import "./App.css";
import BangerShareApp from "./BangerShareApp";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import MusicPlayer from "./containers/MusicPlayer";

const BangerShareTheme = createMuiTheme({
  palette: {
    type: "dark",
    text: {
      primary: "#ffffff",
      secondary: "#6e6e6e",
    },
    primary: {
      // Purple and green play nicely together.
      main: "#7d12ff",
      contrastText: "#fff",
    },
    secondary: {
      main: "#ff3d00",
      contrastText: "#fff",
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
        <CssBaseline />
        <div style={{ paddingBottom: "10%" }}>
          <BangerShareApp />
        </div>
        <div
          style={{
            position: "fixed",
            bottom: "0%",
            width: "100%",
          }}
        >
          <MusicPlayer />
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
