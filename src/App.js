import React, { Component } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Home from './Home';
import Calendar from './Calendar';
import Weather from './Weather';



class App extends Component {
  render() {
    return (
      <Router>
        <div>

          <header>
            <h1>Hello, Alyssa</h1>
            <nav>
                <Link to="/">Day at a glance</Link>{' '}
                <Link to="/weather">Weather report</Link>{' '}
                <Link to="/calendar">Calendar</Link>
            </nav>
          </header>

          <Route exact path="/" component={Home} />
          <Route path="/weather" component={Weather} />
          <Route path="/calendar" component={Calendar} />

        </div>

      </Router>
    );
  }
}
export default App;
