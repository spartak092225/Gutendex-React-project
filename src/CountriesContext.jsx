import { createContext, useState, useEffect } from 'react';

export const CountriesContext = createContext();

export function CountriesProvider({ children }) {
  const [allCountries, setAllCountries] = useState([]);
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem('favorites')) || []
  );

  // Fetch countries
  useEffect(() => {
    const fetchCountries = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          'https://restcountries.com/v3.1/all?fields=name,region,flags,capital,population,cca3,subregion,idd'
        );
        if (!response.ok) throw new Error('Failed to fetch countries');
        const data = await response.json();
        setAllCountries(data);
        setCountries(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchCountries();
  }, []);

  // Save favorites to localStorage
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  // Toggle favorite
  const toggleFavorite = (cca3) => {
    setFavorites((prev) =>
      prev.includes(cca3) ? prev.filter((id) => id !== cca3) : [...prev, cca3]
    );
  };

  return (
    <CountriesContext.Provider
      value={{
        allCountries,
        countries,
        setCountries,
        loading,
        error,
        favorites,
        toggleFavorite,
      }}
    >
      {children}
    </CountriesContext.Provider>
  );
}
