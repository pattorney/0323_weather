import React from 'react';
import { Button } from 'react-bootstrap';

const WeatherButton = ({cities, setCity}) => {
  return (
    <div className="weather-buttons">
       <Button variant="primary">Current Location</Button>
       {cities.map((item, index) => (
       <Button variant="warning" key={index} onClick={()=>setCity(item)}>
        {item}
      </Button>
       ))}
    </div>
  );
}

export default WeatherButton;

/*
<Button variant="warning" cityId="2968815">Paris</Button>
<Button variant="warning" cityId="5128581">New York</Button>
<Button variant="warning" cityId="1850147">Tokyo</Button>
<Button variant="warning" cityId="1816670">Beijing</Button>
*/