import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import "@rainbow-me/rainbowkit/styles.css";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Providers } from "./Providers";
import {
  useGeoLocation,
  useCheckIsSupportedNetwork,
  useTokenBalance,
} from "./Hooks";

const GlobalHooks = () => {
  // useGeoLocation()
  useCheckIsSupportedNetwork();
  useTokenBalance();

  return null;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Providers>
      <GlobalHooks />
      <HashRouter>
        <App />
      </HashRouter>
    </Providers>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
