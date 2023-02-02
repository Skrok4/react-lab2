import React from "react";
import LoginButton from "./elements/LoginButton";
import LogoutButton from "./elements/LogoutButton";

const Header = ({ isLoggedIn, handleLogin, handleLogout }) => (
  <div className="header">
    <h1>Food Store</h1>
    {isLoggedIn ? (
      <LogoutButton handleLogout={handleLogout} />
    ) : (
      <LoginButton handleLogin={handleLogin} />
    )}
  </div>
);

export default Header;
