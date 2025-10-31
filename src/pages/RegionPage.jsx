import { useContext, useEffect, useState } from 'react';
import { CountriesContext } from '../CountriesContext';
import styles from './Country.module.css';

export default function RegionPage({ region }) {
  const {
    allCountries,
    countries,
    setCountries,
    favorites,
    toggleFavorite,
    loading,
    error,
  } = useContext(CountriesContext);

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCountries(allCountries.filter((c) => c.region === region));
  }, [allCountries, region, setCountries]);

  useEffect(() => {
    setCurrentPage(1);
  }, [countries]);

  const countriesPerPage = 12;
  const lastCountryIndex = currentPage * countriesPerPage;
  const firstCountryIndex = lastCountryIndex - countriesPerPage;
  const currentCountries = countries.slice(firstCountryIndex, lastCountryIndex);
  const totalPages = Math.ceil(countries.length / countriesPerPage);

  return (
    <div className={styles.countriesContainer}>
      {loading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}

      {!loading && !error && (
        <>
          <ul className={styles.countryList}>
            {currentCountries.map((c) => (
              <li
                key={c.cca3}
                className={styles.country}
              >
                <img
                  src={c.flags.png}
                  alt={c.name.common}
                  className={styles.flag}
                />
                <p className={styles.countryName}>{c.name.common}</p>
                <p className={styles.capital}>
                  <strong>Capital:</strong> {c.capital?.[0] || 'N/A'}
                </p>
                <p className={styles.region}>
                  <strong>Region:</strong> {c.region}
                </p>
                <p className={styles.population}>
                  <strong>Population:</strong>{' '}
                  {c.population?.toLocaleString() || 'N/A'}
                </p>

                <label
                  htmlFor={`fav-${c.cca3}`}
                  className={styles.favoriteLbl}
                >
                  <input
                    type="checkbox"
                    className={styles.favoriteBtn}
                    id={`fav-${c.cca3}`}
                    checked={favorites.includes(c.cca3)}
                    onChange={() => toggleFavorite(c.cca3)}
                  />
                </label>
              </li>
            ))}
          </ul>

          {countries.length > countriesPerPage && (
            <div className={styles.pagination}>
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                Previous
              </button>
              <span>
                Page {currentPage} of {totalPages}
              </span>
              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                Next
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
