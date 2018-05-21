import React, { Component } from 'react';
import './App.css';
import { Route, Switch, NavLink } from 'react-router-dom';
import History from './History';
import Home from './Home';

class App extends Component {
  render() {
      return (
        <div>
            <NavLink to="/ " activeClassName="selected"> Welcome </NavLink>
            <NavLink to="/our-history" activeClassName="selected"> History </NavLink>

            <Switch>
              <Route exact path="/ " component={Home} />
              <Route path="/our-history" component={History} />
            </Switch>
        </div>  
      );
  }
}

export default App;

