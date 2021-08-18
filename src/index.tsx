// index.tsx
import React from "react";
import ReactDOM from "react-dom";
import App from "./App"
// Import DAppProvider
import { DAppProvider } from "@usedapp/core";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    {/* 
       Wrap our app in the provider, config is required, 
        but can be left as an empty object: 
    */}
    <DAppProvider config={{}}>
      <BrowserRouter>
      
      <App />
      </BrowserRouter>
    </DAppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);