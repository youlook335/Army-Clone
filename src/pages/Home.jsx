import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-6">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-yellow-400">Welcome to Pakistan Army</h2>
        <p className="mt-4 text-lg">Serving with Honor & Pride</p>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-800 p-4 rounded-md">
          <h3 className="text-xl font-bold text-yellow-400">Join Pakistan Army</h3>
          <p>Become a part of the defenders of Pakistan.</p>
          <Link to="/join" className="mt-4 inline-block px-4 py-2 bg-yellow-500 text-black rounded-md">Apply Now</Link>
        </div>
        <div className="bg-gray-800 p-4 rounded-md">
          <h3 className="text-xl font-bold text-yellow-400">Latest News</h3>
          <p>Get the latest updates about Pakistan Army.</p>
          <Link to="/news" className="mt-4 inline-block px-4 py-2 bg-yellow-500 text-black rounded-md">Read More</Link>
        </div>
        <div className="bg-gray-800 p-4 rounded-md">
          <h3 className="text-xl font-bold text-yellow-400">Career Opportunities</h3>
          <p>Explore different career paths in Pakistan Army.</p>
          <Link to="/careers" className="mt-4 inline-block px-4 py-2 bg-yellow-500 text-black rounded-md">Explore</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
