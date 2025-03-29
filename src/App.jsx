import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import JoinArmy from "./pages/JoinArmy";
import Apply from "./pages/Apply";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/join" element={<JoinArmy />} />
        <Route path="/apply" element={<Apply />} />
      </Routes>
    </Router>
  );
};

export default App;
