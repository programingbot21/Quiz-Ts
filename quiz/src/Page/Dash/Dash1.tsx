import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dash1: React.FC = () => {
  const navigate = useNavigate();
  const [adminName, setAdminName] = useState("");

  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin");
    if (!isAdmin) {
      navigate("/login"); // Redirect to login if not authenticated
    }

    // Get Admin Name from localStorage
    const storedAdminName = localStorage.getItem("adminName");
    if (storedAdminName) {
      setAdminName(storedAdminName);
    }
  }, [navigate]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Admin Dashboard</h2>
      <p className="text-lg mt-2">Welcome, <span className="font-bold text-blue-600">{adminName}</span> 🎉</p>

      <button
        onClick={() => {
          localStorage.removeItem("isAdmin"); // Logout
          localStorage.removeItem("adminName"); // Remove admin name
          navigate("/login");
        }}
        className="bg-red-600 text-white px-4 py-2 rounded mt-4"
      >
        Logout
      </button>
    </div>
  );
};

export default Dash1;
