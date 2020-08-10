import React from "react";
import { NavLink } from "react-router-dom";

const SignedOut = () => {
  return (
    <ul className="nav-right">
      <li className="nav-item">
        <NavLink to="/signup">Sign Up</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/signin">Login</NavLink>
      </li>
    </ul>
  );
};

export default SignedOut;
