import axios from "axios";


export function getDataFromWeather(city) {

  const apiKey = `45d216bf2c7cedeb34a58268131f2f4a`;
  const unit = 'metric';

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=en&appid=${apiKey}&units=${unit}`;
  const response = axios.get(url);
  return response;

}

export async function GetDataFromWeatherlat (lon, lat) {

  const apiKey = `45d216bf2c7cedeb34a58268131f2f4a`;
  const unit = 'metric';
  
  try {
    const responselat = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${unit}`
    );
    return responselat;
  } catch (error) { }
}

  // let urllat = `https://api.openweathermap.org/data/2.5/weather?lon=${longitude}&lat=${latitude}&lang=en&appid=${apiKey}&units=${unit}`;
  // const responselat = axios.get(urllat);
  // return responselat;




  const apiKey = '45d216bf2c7cedeb34a58268131f2f4a';
  const unit = 'metric';
  
  const getWeatherData = async (lat, lon) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${unit}`
      );
      return response.data;
    } catch (error) {
    }
  };
  
  export default getWeatherData;
  