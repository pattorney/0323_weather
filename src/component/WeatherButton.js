import React from 'react';
import { Button } from 'react-bootstrap';
import {cityName} from "./WeatherBox";

const WeatherButton = ({cities, setCity, getCurrentLocation}) => {
  return (
    <div className="weather-buttons">
      <Button 
        variant="secondary"
        onClick={()=>{getCurrentLocation()}}>
        Current Location
      </Button>
      {cities.map((city, index) => (
        <Button 
          variant={city === cityName ? "primary" : "warning"}
          key={index}
          onClick={()=>{setCity(cities[index])}}>
          {city}
        </Button>
      ))}
    </div>
  );
};

export default WeatherButton;