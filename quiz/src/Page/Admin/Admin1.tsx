import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";


const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [adminName, setAdminName] = useState("");

  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin");
    if (!isAdmin) {
      navigate("/login");
    }
    setAdminName(localStorage.getItem("adminName") || "Admin");
  }, [navigate]);

  return (
    <div className="flex">
      <Sidebar/>
      <div className="p-6 w-full">
        <h2 className="text-2xl font-bold">Dashboard</h2>
        <p className="text-lg">Welcome, <span className="font-bold text-blue-600">{adminName}</span> 🎉</p>
      </div>
    </div>
  );
};

export default AdminDashboard;
