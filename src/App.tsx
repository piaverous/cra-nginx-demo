import React from 'react';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import { ConnectedRouter } from 'connected-react-router';
import {history} from './app/store';

import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ConnectedRouter history={history}>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <p>
            <Link to="/users">Users</Link> |
            <Link to="/users/potatoes">Potatoes</Link> |
            <Link to="/about">About</Link> |
            <Link to="/">Home</Link>
          </p>
          <Switch>
            <Route exact path="/about">
              About
            </Route>
            <Route exact path="/users">
              Users
            </Route>
            <Route exact path="/users/potatoes">
              Users/potatoes
            </Route>
            <Route exact path="/">
              Home
            </Route>
          </Switch>
        </ConnectedRouter>
      </header>
    </div>
  );
}

export default App;
