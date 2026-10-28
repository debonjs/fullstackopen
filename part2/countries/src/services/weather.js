const api_key = import.meta.env.VITE_WEATHER_KEY;
import axios from "axios";
const url = "https://api.openweathermap.org/data/2.5/weather?q=";

const getWeather = (capital) => {
  const request = axios.get(`${url}${capital}&appid=${api_key}&units=metric`);
  request.then(data => { 
    console.log(data.data)
  })
  return request.then((capitalWeather) => capitalWeather.data);
};

export default {
  getWeather,
};
