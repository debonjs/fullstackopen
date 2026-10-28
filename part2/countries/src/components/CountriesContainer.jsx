import CountryCardItem from "./CountryCardItem";

const CountriesContainer = ({ countries }) => {
  return (
    <ul>
      {countries.map((country) => (
        <CountryCardItem country={country} />
      ))}
    </ul>
  );
};

export default CountriesContainer;
