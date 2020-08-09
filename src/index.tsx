import React from "react";
import ReactDOM from "react-dom";
import { AppContextProvider } from "./core/context";
import { App } from "./app";

ReactDOM.render(
  <div>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </div>,
  document.getElementById("root")
);
