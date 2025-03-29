import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-green-700 p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-white">Pakistan Army</h1>
      <button className="md:hidden text-yellow-400" onClick={() => setIsOpen(!isOpen)}>☰</button>
      <ul className={`md:flex gap-6 absolute md:static bg-green-700 w-full md:w-auto ${isOpen ? "block" : "hidden"}`}>
        <li><Link to="/" className="text-white hover:text-yellow-400">Home</Link></li>
        <li><Link to="/join" className="text-white hover:text-yellow-400">Join Army</Link></li>
        <li><Link to="/news" className="text-white hover:text-yellow-400">News</Link></li>
        <li><Link to="/careers" className="text-white hover:text-yellow-400">Careers</Link></li>
        <li><Link to="/gallery" className="text-white hover:text-yellow-400">Gallery</Link></li>
        <li><Link to="/contact" className="text-white hover:text-yellow-400">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
