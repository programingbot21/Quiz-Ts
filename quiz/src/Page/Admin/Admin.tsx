import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin: React.FC = () => {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (password === "admin123") {
      navigate("/dashboard");
    } else {
      alert("Invalid Password!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-bold mb-4">Admin Login</h2>
        <input 
          type="password"
          placeholder="Enter Admin Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 rounded w-full mb-2"
        />
        <button onClick={handleLogin} className="bg-blue-600 text-white px-4 py-2 rounded w-full">
          Login
        </button>
      </div>
    </div>
  );
};

export default AdminLogin;
