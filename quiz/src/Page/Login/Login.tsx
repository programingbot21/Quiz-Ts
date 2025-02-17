import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Handle User Login
  const handleLogin = () => {
    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      setError("No user found. Please register first.");
      return;
    }

    const { username: storedUsername, password: storedPassword } = JSON.parse(storedUser);
    
    if (username === storedUsername && password === storedPassword) {
      localStorage.setItem("isAdmin", "true"); // Save login state
      navigate("/admin-dashboard"); // Redirect to Admin Dashboard
    } else {
      setError("Invalid username or password.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>

        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 rounded w-full mb-2"
        />
        
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 rounded w-full mb-2"
        />
        
        <button
          onClick={handleLogin}
          className="bg-blue-600 text-white px-4 py-2 rounded w-full"
        >
          Login
        </button>

        <p className="mt-2 text-center text-sm">
          Don't have an account?{" "}
          <a href="/register" className="text-blue-600">Register</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
