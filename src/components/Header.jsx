import { Link } from "react-router-dom";
import "./Header.css";

export function Header() {
  return (
    <div className="header">
      <div className="header-top">
        <Link to="/">
          <img src="/globe.png" alt="globe icon" className="logo" width={50} />
        </Link>

        <form>
          <input type="search" placeholder="Search for a country" />
        </form>

        <Link to="/Favorites" className="favorite-btn">
          <img
            src="/heart-empty.png"
            alt="favorite icon empty"
            className="favorite not-added"
            width={30}
          />
          Favorites
        </Link>
      </div>

      <div className="navbar">
        <Link to="/Africa" className="region">
          Africa
        </Link>
        <Link to="/TheAmericas" className="region">
          The Americas
        </Link>
        <Link to="/Asia" className="region">
          Asia
        </Link>
        <Link to="/Europe" className="region">
          Europe
        </Link>
        <Link to="/Oceania" className="region">
          Oceania
        </Link>
      </div>
    </div>
  );
}
