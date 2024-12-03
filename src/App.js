import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import Achievements from "./components/Achievements";
import Message from "./components/Message";

const App = () => {
  return (
    <Router>
      <nav style={styles.nav}>
        <Link style={styles.link} to="/">Home</Link>
        <Link style={styles.link} to="/gallery">Gallery</Link>
        <Link style={styles.link} to="/achievements">Achievements</Link>
        <Link style={styles.link} to="/message">Message</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/message" element={<Message />} />
      </Routes>
    </Router>
  );
};

const styles = {
  nav: { padding: "10px", background: "#333", textAlign: "center" },
  link: { margin: "0 10px", color: "#fff", textDecoration: "none" },
};

export default App;
