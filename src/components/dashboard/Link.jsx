import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import CryptoTracker from "./CryptoTracker";
import "./style.css";
import Dashboard from "./components/dashboard/Dashboard";
import { ChainId, DAppProvider, ChainId, DAppProvider, useEthers, useEtherBalance } from '@usedapp/core'
import ReactDOM from "react-dom";
import { formatEther, formatUnits, useEthers } from '@ethersproject/units';
import ConnectButton from "./components/dashboard/ConnectButton";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Swap from "./components/dashboard/Swap";
import Loan from "./components/dashboard/Loan";



function Navbar() {
  return (
    <div>
      <Link to="/">Dashboard </Link>
      <Link to="/swap">Swap </Link>
      <Link to="/loan">Loan</Link>
    </div>
  );
};