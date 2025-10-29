import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import Asia from "./pages/Asia";
import Europe from "./pages/Europe";
import Africa from "./pages/Africa";
import TheAmericas from "./pages/TheAmericas";
import Oceania from "./pages/Oceania";

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
      </Routes>
    </Router>
  );
}

export default App;
