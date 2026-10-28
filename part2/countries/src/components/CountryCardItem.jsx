import { useState, useEffect } from "react";
import weatherService from "../services/weather";

const CountryCardItem = ({ country }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [weatherDetails, setWeatherDetails] = useState([]);

  const handleShowDetails = () => setShowDetails(!showDetails);

  useEffect(() => {
    if (showDetails) {
      weatherService.getWeather(country.capital).then((data) => {
        setWeatherDetails(data);
      });
    }
  }, [showDetails]);

  return (
    <li key={country.cca3}>
      <div>
        <p>{country.name.common}</p>
        <button onClick={handleShowDetails}>
          {showDetails ? " Show less" : "Show more"}
        </button>
      </div>

      {showDetails ? (
        <div>
          <div>
            <span>Capital {country.capital}</span>
            <span>Area {country.area}</span>
          </div>
          <h2>Languages</h2>
          <ul>
            {Object.values(country.languages || {}).map((lang) => (
              <li key={lang}>{lang}</li>
            ))}
          </ul>
          <figure>
            <img
              src={country.flags.svg}
              alt={"flag of" + country.name.common}
            />
          </figure>
          <h3>Weather in {country.capital}</h3>
          <div>
            <p>Temperature {weatherDetails?.main?.temp}</p>
            <p>Wind {weatherDetails?.wind?.speed} m/s</p>
          </div>
        </div>
      ) : null}
    </li>
  );
};

export default CountryCardItem;
