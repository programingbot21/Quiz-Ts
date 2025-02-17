import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logot: React.FC = () => {
  const navigate = useNavigate();

  // Check if user is authenticated
  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin");
    if (!isAdmin) {
      navigate("/login"); // Redirect to login if not authenticated
    }
  }, [navigate]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Admin Dashboard</h2>
      <p>Welcome, Admin! 🎉</p>

      <button
        onClick={() => {
          localStorage.removeItem("isAdmin"); // Logout
          navigate("/login");
        }}
        className="bg-red-600 text-white px-4 py-2 rounded mt-4"
      >
        Logout
      </button>
    </div>
  );
};

export default Logot;
