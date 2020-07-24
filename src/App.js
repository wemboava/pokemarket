import React from "react";
import { BrowserRouter } from "react-router-dom";

import AppProvider from "./hooks";
import Routes from "./routes";
import GlobalStyles from "./styles/global";

import { CurrentThemeProvider } from "./hooks/theme";

function App() {
  return (
    <BrowserRouter>
      <CurrentThemeProvider>
        <AppProvider>
          <Routes />
        </AppProvider>
        <GlobalStyles />
      </CurrentThemeProvider>
    </BrowserRouter>
  );
}

export default App;
