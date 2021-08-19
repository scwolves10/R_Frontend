import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import CryptoTracker from "./CryptoTracker";
import "./components/style.css";
import Dashboard from "./Dashboard";
import { ChainId, DAppProvider, ChainId, DAppProvider, useEthers, useEtherBalance } from '@usedapp/core'
import ReactDOM from "react-dom";
import { formatEther, formatUnits, useEthers } from '@ethersproject/units';
import ConnectButton from "./ConnectButton";
import Loan from "./Loan";
import Navbar from "./Link";

const queryClient = new QueryClient();


const App = () => {
  return (
    <div>
      <Dashboard />


    </div>
  );
}
export default App;