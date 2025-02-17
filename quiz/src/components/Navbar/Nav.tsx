// import React from "react";
// import { Link } from "react-router-dom";
// // import Logot from "../../Page/Logout/Logot";

// const Navbar: React.FC = () => {
//   return (
//     <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
//       <h1 className="text-2xl font-bold">Quiz App</h1>
//       <div>
//         <Link to="/" className="mr-4">Home</Link>
//         <Link to="/admin-dashboard" className="mr-4">Dashboard</Link>
//         <Link to="/admin" className="bg-blue-600 px-4 py-2 rounded">Admin </Link>
        

//         <Link to="/login" className="bg-blue-600 px-4 py-2 rounded">Login </Link>
//         <Link to="/register" className="bg-blue-600 px-4 py-2 rounded">Register </Link> 
      

    
       
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if admin is logged in
    const isAdmin = localStorage.getItem("isAdmin");
    setIsLoggedIn(!!isAdmin);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    localStorage.removeItem("adminName");
    setIsLoggedIn(false);
    navigate("/login"); // Redirect to login after logout
  };

  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Quiz App</h1>
      <div>
        <Link to="/" className="mr-4">Home</Link>
        <Link to="/admin-dashboard" className="mr-4">Dashboard</Link>

        {isLoggedIn ? (
          <>
            <Link to="/admin" className="bg-blue-600 px-4 py-2 rounded mr-4">Admin</Link>
            <button onClick={handleLogout} className="bg-red-600 px-4 py-2 rounded">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="bg-blue-600 px-4 py-2 rounded mr-4">Login</Link>
            <Link to="/register" className="bg-blue-600 px-4 py-2 rounded">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
