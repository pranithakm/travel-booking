import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import Destinations from "./pages/Destinations";
import PlacePage from "./pages/PlacePage";
import About from "./pages/About";
import ContactPage from "./pages/ContactPage";
import Footer from "./pages/Footer";
function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <header className="App-header">
        </header>
        <Routes>
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/place/:id" element={<PlacePage />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
        </Routes>

      </div>
      <Footer />
    </Router>
  );
}

export default App;