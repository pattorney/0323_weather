import React from 'react';

let cityName;  // 버튼 색상 변경용 변수 : 선택된 버튼의 city === 웨더박스 내에 표소된 cityName -> 버튼 색상 변경

const WeatherBox = ({weather}) => {
  if (!weather || !weather.name || !weather.main.temp || !weather.weather) {
    return <div>Network Error in Finding Weather Information!</div>;
  }

  let celsius = weather.main.temp;
  let farenheit = Math.floor(((weather.main.temp*1.8)+32)*100)/100;
  cityName = weather.name;

  return (
    <div className="weather-box">
      <div>{weather.name}</div>
      <h1>{celsius}C / {farenheit}F</h1>
      <h1>{weather.weather[0].description}</h1>
    </div>
  );
};

export default WeatherBox;
export {cityName};

