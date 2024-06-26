import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./store";
import { SnackbarProvider } from "notistack";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <SnackbarProvider maxSnack={3}  autoHideDuration={3000}>
      <App />
    </SnackbarProvider>
  </Provider>
);

reportWebVitals();
