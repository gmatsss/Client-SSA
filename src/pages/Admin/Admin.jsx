import React, { useContext, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Sidebar from "../Admin/Sidebar/Sidebar";
import Dashboard from "./Dashboard/Dashboard";

import "./Admin.css";
import UserContext from "../../Context/UserContext";

const Admin = () => {
  const { isLoggedIn, isLoading } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !isLoggedIn) {
      navigate("/Signin");
    }
  }, [isLoggedIn, isLoading, navigate]);

  if (isLoading) {
    return null; // or return a loading spinner
  }

  return (
    <div className="Admin">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        {/* Add other routes here if needed */}
      </Routes>
    </div>
  );
};

export default Admin;
