import { useEffect, useState } from "react";
import countriesService from "./services/countries";
import CountriesContainer from "./components/CountriesContainer";
import CountryCard from "./components/CountryCard";
function App() {
  const [countries, setCountries] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    countriesService.getAll().then(setCountries);
  }, []);

  const filteredCountries = searchQuery
    ? countries.filter((country) =>
        country.name.common.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : [];

  const handleCountryInput = (event) => setSearchQuery(event.target.value);

  const renderContent = () => {
    if (searchQuery.length > 1 && filteredCountries.length > 10) {
      return <p>Too many matches, specify another filter</p>;
    }

    if (filteredCountries.length > 1 && filteredCountries.length <= 10) {
      return <CountriesContainer countries={filteredCountries} />;
    }
    if (filteredCountries.length === 1) {
      return <CountryCard countryData={filteredCountries[0]} />;
    }
  };

  return (
    <div className="countries_container">
      <h1>Countries</h1>

      <div className="search_countries">
        <label htmlFor="country-name">find countries</label>
        <input
          type="text"
          id="country-name"
          value={searchQuery}
          onChange={handleCountryInput}
        />
      </div>

      <div className="countries_result">{renderContent()}</div>
    </div>
  );
}

export default App;
