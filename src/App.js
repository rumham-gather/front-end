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
import RecipesList from './RecipesList.js';
import RecipesDetail from './RecipesDetail.js';
import FavoritesPage from './FavoritesPage.js';
import AboutUs from './AboutUs.js';
import EventsList from './EventsList.js';
import EventsDetail from './EventsDetail.js';

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
                <RecipesList
                  {...routerProps}
                />
              }
            />
            <Route
              exact
              path='/recipes/:id'
              render={(routerProps) => 
                <RecipesDetail
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
            <Route
              exact
              path='/events'
              render={(routerProps) => 
                <EventsList
                  {...routerProps}
                />
              }
            />
            <Route
              exact
              path='/events/:id'
              render={(routerProps) => 
                <EventsDetail
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

