import './App.css';
import React, { Component } from 'react';
import {
  BrowserRouter as Router, 
  Route, 
  Switch,
  Link,
} from "react-router-dom";
import Home from './Home.js';
import Header from './Header.js';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Header />
          <Switch>
            <Route
              exact
              path='/'
              render={(routerProps) => 
                <Home 
                  {...routerProps}
                />
              }
            />
          </Switch>
        </Router>
      </div>
    )
  }
}

