import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import "./App.css";
import BangerShareApp from "./BangerShareApp";
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { purple } from '@material-ui/core/colors';

const BangerShareTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
  primary: {
    // Purple and green play nicely together.
    main: purple[500],
  },
});

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={BangerShareTheme}>
        <BangerShareApp />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
