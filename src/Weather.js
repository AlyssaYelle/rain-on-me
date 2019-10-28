import React, { Component } from 'react';

class Weather extends Component {

  constructor() {
    super();

    this.state = {
      date: '',
      weatherLoaded: false,
      weatherError: false
    }
  }



  render () {
    return (
      <div>
        <h2>Weather Report</h2>

      </div>
    );
  }
}

export default Weather;
