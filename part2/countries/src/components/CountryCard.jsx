import { useState, useEffect } from "react";
import weatherService from "../services/weather";

const CountryCard = ({ countryData }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [weatherDetails, setWeatherDetails] = useState([]);
  useEffect(() => {
    weatherService.getWeather(countryData.capital).then((data) => {
      setWeatherDetails(data);
    });
  }, []);
  return (
    <div>
      <h2>{countryData.name.common}</h2>
      <div>
        <span>Capital {countryData.capital}</span>
        <span>Area {countryData.area}</span>
      </div>
      <h2>Languages</h2>
      <ul>
        {Object.values(countryData.languages || {}).map((lang) => (
          <li key={lang}>{lang}</li>
        ))}
      </ul>
      <figure>
        <img
          src={countryData.flags.svg}
          alt={"flag of" + countryData.name.common}
        />
      </figure>
      <h3>Weather in {countryData.capital}</h3>
      <div>
        <p>Temperature {weatherDetails?.main?.temp}</p>
        <p>Wind {weatherDetails?.wind?.speed} m/s</p>
      </div>
    </div>
  );
};

export default CountryCard;
