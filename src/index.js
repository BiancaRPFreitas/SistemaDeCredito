import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { FluxoProvider } from "./context/FluxoContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <FluxoProvider>
    <App />
  </FluxoProvider>
);

