import React from 'react';

const WeatherBox = ({weather}) => {
  if (!weather || !weather.name || !weather.main.temp || !weather.weather) {
    return <div>Loading...</div>;
  }

  let celsius = weather.main.temp;
  let farenheit = Math.floor(((weather.main.temp*1.8)+32)*100)/100;
  
  return (
    <div className="weather-box">
      <div>{weather.name}</div>
      <h1>{celsius}C / {farenheit}F</h1>
      <h1>{weather.weather[0].description}</h1>
    </div>
  );
};


export default WeatherBox;
