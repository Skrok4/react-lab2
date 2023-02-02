import React from "react";

const LogoutButton = ({ handleLogout }) => (
  <button className="logout-button" onClick={handleLogout}>
    Logout
  </button>
);

export default LogoutButton;
