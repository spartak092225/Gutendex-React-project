// import Countries from "../components/Countries";
import { useState, useEffect } from "react";
import styles from "./Country.module.css";

export default function Home() {
  const [country, setCountry] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountries = async () => {
      const restCountriesApi =
        "https://restcountries.com/v3.1/all?fields=name,region,flags,capital,population";
      try {
        const response = await fetch(restCountriesApi);
        if (!response.ok) {
          throw new Error("Failed to load the data");
        }

        const countries = await response.json();
        setCountry(countries);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchCountries();
  }, []);

  return (
    <div className={styles.countriesContainer}>
      {loading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      {!loading && !error && country.length > 0 && (
        <ul className={styles.country}>
          {country.map((c, idx) => (
            <li key={c.cca3 || idx} className={styles.countryCard}>
              <img
                src={c.flags.png}
                alt={c.name.common}
                width={60}
                className={styles.flag}
              />
              <p className={styles.countryName}>{c.name.common}</p>
              <p className={styles.capital}>Capital: {c.capital}</p>
              <p className={styles.region}>Region: {c.region}</p>
              <p className={styles.population}>Population: {c.population}</p>
              <input type="checkbox" />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
