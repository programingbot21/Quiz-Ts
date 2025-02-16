import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Quiz App</h1>
      <div>
        <Link to="/" className="mr-4">Home</Link>
        <Link to="/dashboard" className="mr-4">Dashboard</Link>
        <Link to="/admin" className="bg-blue-600 px-4 py-2 rounded">Admin Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
