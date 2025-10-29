// import Countries from "../components/Countries";
import { useState, useEffect } from "react";

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
    <div className="country">
      {loading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      {!loading && !error && country.length > 0 && (
        <ul>
          {country.map((c, idx) => (
            <li key={c.cca3 || idx}>
              <img src={c.flags.png} alt={c.name.common} width={60} />
              <p>{c.name.common}</p>
              <p>{c.region}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
