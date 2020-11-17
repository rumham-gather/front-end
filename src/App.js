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
import ListPage from './ListPage.js';
import DetailPage from './DetailPage.js';
import FavoritesPage from './FavoritesPage.js';
import AboutUs from './AboutUs.js';

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
            <Route
              exact
              path='/recipes'
              render={(routerProps) => 
                <ListPage
                  {...routerProps}
                />
              }
            />
            <Route
              exact
              path='/recipes/:id'
              render={(routerProps) => 
                <DetailPage
                  {...routerProps}
                />
              }
            />
            <Route
              exact
              path='/favorites'
              render={(routerProps) => 
                <FavoritesPage
                  {...routerProps}
                />
              }
            />
            <Route
              exact
              path='/about'
              render={(routerProps) => 
                <AboutUs
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

