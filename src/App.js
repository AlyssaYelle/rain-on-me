import React, { Component } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


import About from './About';
import Weather from './Weather';



class App extends Component {
  render() {
    return (
      <Router>
        <div>

          <header>
            <h1>Rain on me</h1>
            <nav>
                <Link to="/">Weather</Link>{' '}
                <Link to="/about">About</Link>{' '}
            </nav>
          </header>

          <Route exact path="/" component={Weather} />
          <Route path="/about" component={About} />

        </div>

      </Router>
    );
  }
}
export default App;
