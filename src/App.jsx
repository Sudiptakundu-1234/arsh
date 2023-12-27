import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Layout/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Service from "./Components/Service";
import Portfolio from "./Components/Portfolio";
import Team from "./Components/Team";
import Contact from "./Components/Contact";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
