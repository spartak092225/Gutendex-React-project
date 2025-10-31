import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import { CountriesProvider } from './CountriesContext';
import RegionPage from './pages/RegionPage';

function App() {
  return (
    <CountriesProvider>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/Africa"
            element={<RegionPage region="Africa" />}
          />
          <Route
            path="/Asia"
            element={<RegionPage region="Asia" />}
          />
          <Route
            path="/Europe"
            element={<RegionPage region="Europe" />}
          />
          <Route
            path="/TheAmericas"
            element={<RegionPage region="Americas" />}
          />
          <Route
            path="/Oceania"
            element={<RegionPage region="Oceania" />}
          />
          <Route
            path="/Favorites"
            element={<Favorites />}
          />
        </Routes>
      </Router>
    </CountriesProvider>
  );
}

export default App;
