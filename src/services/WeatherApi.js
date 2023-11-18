import axios from "axios";

export function getDataFromWeather(city) {

  const apiKey = `45d216bf2c7cedeb34a58268131f2f4a`;
  const unit = 'metric';

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=en&appid=${apiKey}&units=${unit}`;
  const response = axios.get(url);
  return response;

}

const apiKey = '45d216bf2c7cedeb34a58268131f2f4a';
const unit = 'metric';

export function getWeatherData (lat, lon)  {

  let urlLat = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=en&appid=${apiKey}&units=${unit}`
   const res = axios.get(urlLat); 
   return res;
  };
