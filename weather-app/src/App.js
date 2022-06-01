import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import WeatherBox from './component/WeatherBox';
import WeatherButton from './component/WeatherButton';
import { useState,useEffect } from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import { Container } from 'react-bootstrap';

  //1. 앱이 실행되자마자 (useEffect() ) 현재 위치 기반의 날씨 보임 
  //2. 날씨정보 : 현재도시 , 섭씨, 화씨 , 날씨 상태 
  //3. 5개의 버튼 (1개는 현재, 나머지는 도시별 날씨 확인)
  //4. 도시버튼을 클릭할때 마다 도시 날씨 확인 
  //5. 현재 위치 버튼을 누르면 현재위치의 기반의 날씨 확인 가능 
  //6. 데이터를 들고오는 동안 로딩 스피너가 돈다.

const cities=['paris','new york','tokyo','seoul'];
const API_KEY = process.env.REACT_APP_API_KEY;
  
function App() {
  const [weather,setWeather] = useState(null);
  const [city,setCity] = useState("ho chi minh");
  const [loading,setLoading] = useState(false);

  const getCurrentLocation = ()=>{
    console.log("getCurrentLocation");
    navigator.geolocation.getCurrentPosition((position)=>{
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;

      getWeatherByCurrentLocation(lat,lon)
    });;
  };

  const getWeatherByCity=async()=>{
    try{
      setLoading(true);
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      let res = await fetch(url);
      let data = await res.json();
      console.log("Data",data);
      setWeather(data);
      setLoading(false);
    }catch(err){
      console.log("error : ",err);
      setLoading(false);
    }
    
  }

  
  const getWeatherByCurrentLocation = async(lat,lon) =>{
    try{
      setLoading(true);
      let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
      let response = await fetch(url)
      let data = await response.json();
      console.log("data",data);
      setWeather(data);
      setLoading(false);
    }catch(err){
      setLoading(false);
      console.log("error : ",err);
    }
    
  }
  const handleCityChange = (city) => {
    if (city === "current") {
      setCity(null);
    } else {
      setCity(city);
    }
  };


  useEffect(()=>{
    if(city == null){
      setLoading(true);
      getCurrentLocation();
    }else{
      setLoading(true);
      getWeatherByCity();
    }
  },[city]);

  return (
    <div>
      <Container className="vh-100">
      { loading ? (
          <div className="container">
            <ClipLoader color="#f88c6b" loading={loading} size={150} />
          </div>
        ) : (
          <div className="container">
            <WeatherBox     weather={weather}/>
            <WeatherButton  cities={cities} 
                            handleCityChange={handleCityChange}
                            selectedCity={city}/>
          </div>
        )
      }
      </Container>
    </div>
  );
}

export default App;
