import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import Dashboard from "./components/dashboard/Dashboard";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import CryptoTracker from "./CryptoTracker";
import { ChainId, DAppProvider, ChainId, DAppProvider, useEthers, useEtherBalance } from '@usedapp/core'
import { formatEther, formatUnits, useEthers } from '@ethersproject/units';
import ConnectButton from "./components/dashboard/ConnectButton";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from "./Link";


const queryClient = new QueryClient();

const config = {
  readOnlyChainId: ChainId.Rinkeby,
  readOnlyUrls: {
    [ChainId.Rinkeby]: 'https://rinkeby.infura.io/v3/acda238b8d434de2840394eea3ad6df3',
  },
}

const App = () => {
  return (
    <div>
      

      <Dashboard />


    </div>
  );
}
export default App;









