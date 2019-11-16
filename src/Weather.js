import React, { Component } from 'react';


class Weather extends Component {

  constructor() {
    super();

    this.state = {
      weatherIsLoaded: false,
      date: '',
      time: '',
      coords: {
        lat: '',
        long: ''
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

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.setCoords.bind(this));
    }

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

  setCoords(position) {
    let lat = position.coords.latitude
    let long = position.coords.longitude
    this.setState({
      coords: {
        lat: lat,
        long: long
      }
    })

    this.fetchWeather()
  }

  fetchWeather() {
    let url = `https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/13719750fdda6865369adcfb2dbaef70/${this.state.coords.lat},${this.state.coords.long}?exclude=minutely,flags`;
    fetch(url, {

    })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      console.log(res)
      this.setState({
        weatherIsLoaded: true,
        weatherReport: {
          currentTemp: Math.floor(res.currently.temperature),
          highTemp: Math.floor(res.daily.data[0].temperatureHigh),
          lowTemp: Math.floor(res.daily.data[0].temperatureLow),
          precip: res.currently.precipProbability * 100,
          humidity: res.daily.data[0].humidity * 100,
          windSpeed: Math.floor(res.currently.windSpeed)
        }
      })
    })
    .catch((err) => {
      console.log(err)
    })
  }


  render () {
    return (
      <div className='weather'>
        <div class='datetime'>
          <h2>{this.state.time}, {this.state.date}</h2>
          {this.state.weatherIsLoaded ?
            <div className="temps">
              <h2>&#8595; {this.state.weatherReport.lowTemp}&deg;F</h2>
              <h2 id='current'>{this.state.weatherReport.currentTemp}&deg;F</h2>
              <h2>&#8593; {this.state.weatherReport.highTemp}&deg;F</h2>
            </div>
            : <h3>Scanning your skies...</h3>
          }
        </div>


      </div>
    );
  }
}

export default Weather;
