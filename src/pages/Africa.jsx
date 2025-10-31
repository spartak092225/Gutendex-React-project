import { useContext } from 'react';
import { CountriesContext } from '../CountriesContext';

export default function Africa() {
  const { allCountries, loading, error } = useContext(CountriesContext);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading countries.</p>;

  // Filter countries by region
  const africanCountries = allCountries.filter(
    (country) => country.region === 'Africa'
  );

  return (
    <div className="region-page">
      <h1>Africa</h1>
      <div className="countries-grid">
        {africanCountries.map((country) => (
          <div
            key={country.cca3}
            className="country-card"
          >
            <img
              src={country.flags?.png}
              alt={`${country.name.common} flag`}
              width={100}
            />
            <h2>{country.name.common}</h2>
            <p>Capital: {country.capital?.[0] || 'N/A'}</p>
            <p>Population: {country.population.toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
