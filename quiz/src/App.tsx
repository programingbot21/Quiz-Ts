// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Page/Home/Home";
import AdminLogin from "./Page/Admin/Admin";
import Dashboard from "./Page/Dash/Dash";
import Navbar from "./components/Navbar/Nav";
import Login from "./Page/Login/Login";
import Register from "./Page/Register/Register";
import Users from "./Page/User/User";
import QuizManagement from "./Page/Quizment/QuizManagement";

import AdminDashboard from "./Page/Admin/Admin1";



function App() {
 

  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>} />

        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/admin/users" element={<Users />} />
        <Route path="/admin/quiz" element={<QuizManagement />} />
        
      </Routes>
    </Router>
    </div>
  );
}

export default App;
