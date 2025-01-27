import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import "./App.css";
import BangerShareApp from "./BangerShareApp";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import MusicPlayer from "./containers/MusicPlayer";

// base theme of the application supplied to all components
const BangerShareTheme = createMuiTheme({
  palette: {
    type: "dark",
    text: {
      primary: "#ffffff",
      secondary: "#a8a6a5",
    },
    primary: {
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
        <BangerShareApp />
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
