import React from "react";

const LoginButton = ({ handleLogin }) => (
  <button className="login-button" onClick={handleLogin}>
    Login
  </button>
);

export default LoginButton;
