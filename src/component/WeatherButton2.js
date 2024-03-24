import React from 'react';
import { Button } from 'react-bootstrap';

const WeatherButton = ({cities, setCity, getCurrentLocation}) => {
  return (
    <div className="weather-buttons">
        <Button 
          variant="warning"
          onClick={()=>{getCurrentLocation()}}>
          Current Location
        </Button>
        {cities.map((city, index) => (
          <Button 
            variant="warning" 
            key={index}
            onClick={()=>{setCity(cities[index])}}>
            {city}
          </Button>
        ))}
    </div>
  );
};



/*
const WeatherButton = ({cities, setCity, getWeatherOfCurrentLocation}) => {
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(null);

  const handleCurrentLocationClick = () => {
    getWeatherOfCurrentLocation();
    setSelectedButtonIndex(-1);
  };

  const handleCityClick = (index) => {
    setCity(cities[index]);
    setSelectedButtonIndex(index);
  };

  return (
    <div className="weather-buttons">
        <Button 
          variant={selectedButtonIndex === -1 ? "primary" : "warning"} 
          onClick={handleCurrentLocationClick}>
          Current Location
        </Button>
        {cities.map((city, index) => (
          <Button 
            variant={selectedButtonIndex === index ? "primary" : "warning"} 
            key={index}
            onClick={() => handleCityClick(index)}>
            {city}
          </Button>
        ))}
    </div>
  );
};
*/

/*
const WeatherButton = ({cities, setCity, getWeatherOfCurrentLocation}) => {
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(null);
  return (
    <div className="weather-buttons">
        <Button variant={selectedButtonIndex === -1 ? "primary" : "warning"} 
        onClick={()=>{getWeatherOfCurrentLocation(); setSelectedButtonIndex(-1);}}>Current Location</Button>
        {cities.map((item, index) => (
        <Button variant={selectedButtonIndex === index ? "primary" : "warning"} key={index}
        onClick={()=>{setCity(cities[index]); setSelectedButtonIndex(index);}}>{item}</Button>
        ))}
    </div>
  );
}
*/

export default WeatherButton;