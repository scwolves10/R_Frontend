import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import CryptoTracker from './CryptoTracker';
import { ChainId, DAppProvider, ChainId, DAppProvider, useEthers, useEtherBalance } from '@usedapp/core'
import ConnectButton from "./ConnectButton";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from "./Dashboard";
import Swap from "./Swap";
import Loan from "./Loan";
import Navbar from "./Link";


function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export const cryptoNames = (
  <div>
    <switch>
    <ListItem>
      
      <ConnectButton />
    </ListItem>

    <ListItem button>
      
    <Route path="/swap" component={Swap} />
      
    </ListItem>
    <ListItem button>
      
      <ListItemText primary="Cardano" />
    </ListItem>
    <ListItem button>
      
      <ListItemText primary="Algorand" />
    </ListItem>
    <ListItem button>
      
      <ListItemText primary="Dogecoin" />
    </ListItem>
    </switch>
  </div>
);
export default cryptoNames;
