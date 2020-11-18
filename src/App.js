import './App.css';
import React, { Component } from 'react';
import {
  BrowserRouter as Router, 
  Route, 
  Switch,
} from "react-router-dom";
import Home from './Components/Home.js';
import Header from './Components/Header.js';
import RecipesList from './Components/RecipesList.js';
import RecipesDetail from './Components/RecipesDetail.js';
import FavoritesPage from './Components/FavoritesPage.js';
import AboutUs from './Components/AboutUs.js';
import Burg from './Components/Burg.js';
import EventsList from './Components/EventsList.js';
import EventsDetail from './Components/EventsDetail.js';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Header />
          <Burg />
          
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

