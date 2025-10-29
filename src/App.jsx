import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import Asia from "./pages/Asia";
import Europe from "./pages/Europe";
import Africa from "./pages/Africa";
import TheAmericas from "./pages/TheAmericas";
import Oceania from "./pages/Oceania";
import Favoriter from "./pages/Favorites";
import Home from "./pages/Home";
// import Countries from "./components/Countries";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/Africa" element={<Africa />} />
        <Route path="/TheAmericas" element={<TheAmericas />} />
        <Route path="/Asia" element={<Asia />} />
        <Route path="/Europe" element={<Europe />} />
        <Route path="/Oceania" element={<Oceania />} />
        <Route path="/Favorites" element={<Favoriter />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
