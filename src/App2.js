import {useEffect, useState, CSSProperties} from "react"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherBox from "./component/WeatherBox";
import WeatherButton from "./component/WeatherButton";
import ClipLoader from "react-spinners/ClipLoader";
// 1. 앱 실행 시 현재위치 날씨
// 2. 날씨정보에는 도시, 섭씨, 화씨, 날씨상태
// 3. 5개의 버튼 (현위치, 4개 도시)
// 4. 도시 버튼 클릭 시 도시별 출력
// 5. 현재위치 누를 경우 다시 현재위치 날씨
// 6. 데이터 수신 중 Loading Spinner 작동

// 현재위치 누르면 현재위치 날씨 출력

function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");
  let [loading, setLoading] = useState(false);
  const cities = ["Paris", "New York", "Tokyo", "Beijing"];
 
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position)=>{
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
    })
  }

  const getWeatherByCurrentLocation = async (lat, lon) => {
    setLoading(true);
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=deae14ce42a0dc89b0d05e0c2215f361&units=metric`;
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
    setLoading(false);
  }
  
  const getWeatherByCity = async () => {
    setLoading(true);
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=deae14ce42a0dc89b0d05e0c2215f361&units=metric`;
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
    setLoading(false);
  };
  
  useEffect(() => {
    if (city === "") {
      getCurrentLocation();
    } else {
      getWeatherByCity()
    }
    },
    [city]);
    
  return (
    <div className="App">
      {loading ? 
        <div className="container">
          <ClipLoader
            color="#ffffff"
            loading={loading}
            size={150}
          />
        </div> :
        <div className="container">
          <WeatherBox weather={weather} />
          <WeatherButton cities={cities} setCity={setCity}/>
        </div>
      }
    </div>
  );
}

export default App;
