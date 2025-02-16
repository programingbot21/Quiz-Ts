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

import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import './App.css';
import LoginPage from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dash";
import QuizForm from "./components/QuizForm/Quiz";

function App() {
  const [auth, setAuth] = useState(false);

  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={!auth ? <LoginPage setAuth={setAuth} /> : <Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={auth ? <Dashboard /> : <Navigate to="/" />} />
        <Route path="/quiz/new" element={auth ? <QuizForm /> : <Navigate to="/" />} />
        <Route path="/quiz/edit/:id" element={auth ? <QuizForm /> : <Navigate to="/" />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
