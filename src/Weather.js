import React, { Component } from 'react';


class Weather extends Component {

  constructor() {
    super();

    this.state = {
      date: '',
      time: '',
      coords: {
        lat: '40.7400628',
        long: '-73.9895542'
      },
      weatherReport: {
        currentTemp: '',
        highTemp: '',
        lowTemp: '',
        precip: '',
        humidity: '',
        windSpeed: ''
      }
    }
  }

  componentDidMount() {
    this.setDateTime();

    //fetch weather report
    // let url = `https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/13719750fdda6865369adcfb2dbaef70/${this.state.coords.lat},${this.state.coords.long}?exclude=minutely,flags`;
    // fetch(url, {
    //
  	// })
  	// .then((res) => {
  	// 	return res.json();
  	// })
  	// .then((res) => {
    //   console.log(res)
  	// 	this.setState({
    //     weatherReport: {
    //       currentTemp: Math.floor(res.currently.temperature),
    //       highTemp: Math.floor(res.daily.data[0].temperatureLow),
    //       lowTemp: Math.floor(res.daily.data[0].temperatureHigh),
    //       precip: res.currently.precipProbability * 100,
    //       humidity: res.daily.data[0].humidity * 100,
    //       windSpeed: Math.floor(res.currently.windSpeed)
    //     }
    //   })
  	// })
  	// .catch((err) => {
  	// 	console.log(err)
  	// })
  }

  setDateTime() {
    let today = new Date();
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    let dateStr = `${today.getDate()} ${months[today.getMonth()]} ${today.getFullYear()}`
    let hour = today.getHours();
    let min = today.getMinutes();
    let suffix;

    if (hour >= 12) {
      suffix = 'pm'
      hour -= 12;
    } else {
      suffix = 'am'
    }

    if (hour === 0) {
      hour = 12;
    }

    if (min < 10) {
      min = '0' + min;
    }

    let timeStr = `${hour}:${min} ${suffix}`
    this.setState({
      date: dateStr,
      time: timeStr
    })
  }


  render () {
    return (
      <div className='weather'>
        <div class='datetime'>
          <h2>{this.state.date}</h2>
          <h3>{this.state.time}</h3>
        </div>
        <div className='currentTemp'>{this.state.weatherReport.currentTemp}</div>
        <p>{this.state.weatherReport.precip}% chance of rain.
        You can expect a low of {this.state.weatherReport.lowTemp} and a high of {this.state.weatherReport.highTemp}.
        </p>

      </div>
    );
  }
}

export default Weather;
