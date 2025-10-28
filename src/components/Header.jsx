import "./Header.css";

export function Header() {
  return (
    <div className="header">
      <img
        src="public/globe.png"
        alt="globe icon"
        className="logo"
        width={50}
      />
      <form action="">
        <input type="search" placeholder="Search for a country" />
      </form>

      <button className="favorite-btn">
        <img
          src="public\heart-empty.png"
          alt="favorite icon empty"
          className="favorite not-added"
          width={30}
        />
        Dine Favoriter
      </button>
    </div>
  );
}
