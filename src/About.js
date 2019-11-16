import React from 'react';

function About() {
  return (
    <div className='about'>
      <h2>Hi there! Welcome to my weather app!</h2>
      <p>
        This app uses JavaScript's Geolocation API to determine a user's
      current latitude/longitude coordinates, and then sends those coordinates
      to the Dark Sky API, which then returns the local weather report.
      </p>
      <p>
        Currently, Rain On Me only shows the user their current temperature, plus the high and low temperatures for the day.
        The next functionality I'd like to add is using D3.js to to visualize the weekly weather report!
      </p>
      <p>
        You can find the code for Rain On Me on my github, <a href="https://github.com/AlyssaYelle/rain-on-me">here</a>.
        If you want to skip straight to the juicy parts, most of the magic happens in the <a href="https://github.com/AlyssaYelle/rain-on-me/blob/master/src/Weather.js">Weather.js file.</a>
      </p>
    </div>
  )
}

export default About;
