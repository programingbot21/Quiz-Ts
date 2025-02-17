import React from "react";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <div className="h-screen w-60 bg-gray-900 text-white flex flex-col p-4">
      <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
      <nav className="flex flex-col space-y-2">
        <Link to="/admin-dashboard" className="p-2 rounded hover:bg-gray-700">
          Dashboard
        </Link>
        <Link to="/admin/users" className="p-2 rounded hover:bg-gray-700">
          Users
        </Link>
        <Link to="/admin/quiz" className="p-2 rounded hover:bg-gray-700">
          Quizzes
        </Link>
        <Link to="/admin/settings" className="p-2 rounded hover:bg-gray-700">
          Settings
        </Link>
        <Link to="/login" className="p-2 rounded bg-red-500 mt-4" onClick={() => localStorage.clear()}>
          Logout
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
