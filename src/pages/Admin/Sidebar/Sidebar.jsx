import React, { useContext, useState } from "react";
import logo from "../../../img/Logo.png";
import question from "../../../img/question.png";
import support from "../../../img/support.png";
import configuration from "../../../img/settings.png";
import dashboard from "../../../img/dashboard.png";
import { toast } from "react-toastify";
import { fetchData } from "../../../api/FetchData";
import "./Sidebar.css";
import UserContext from "../../../Context/UserContext";

const Sidebar = () => {
  const { reloadUser } = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = async () => {
    try {
      const response = await fetchData("User/logoutuser", "POST");
      if (response.message) {
        toast.success(response.message); // Display success message
        reloadUser(); // Reload the user after successful login
      } else {
        toast.error("Logout failed. Please try again."); // Display generic error if no message is received
      }
    } catch (error) {
      toast.error(error.message || "An error occurred during logout."); // Display error message
    }
  };

  return (
    <div className="sidebar-container">
      <div className={`sidebar ${isOpen ? "expanded" : "collapsed"}`}>
        <div className="sidebar-header">
          <img src={logo} alt="Logo" className="logo-sidebar" />
          <hr />
        </div>
        <div className="sidebar-content p-2">
          <div className="sidebar-item">
            <img src={dashboard} alt="Dashboard Icon" />
            <span>Dashboard</span>
            <span className="tooltip-sidebar">Dashboard</span>
          </div>
          <div className="sidebar-item">
            <img src={configuration} alt="Configuration Icon" />
            <span>Configuration</span>
            <span className="tooltip-sidebar">Configuration</span>
          </div>
          <div className="sidebar-item">
            <img src={question} alt="Help Icon" />
            <span>Help</span>
            <span className="tooltip-sidebar">Help</span>
          </div>
          <div className="sidebar-item">
            <img src={support} alt="Contact Us Icon" />
            <span>Contact us</span>
            <span className="tooltip-sidebar">Contact us</span>
          </div>
        </div>
        <div className="sidebar-footer">
          <button onClick={handleLogout}>Logout</button>
        </div>
        <button className="sidebar-button" onClick={toggleSidebar}>
          {isOpen ? "Close" : "Open"}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
