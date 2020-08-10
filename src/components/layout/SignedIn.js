import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../redux/actions/authActions";

const SignedIn = props => {
  return (
    <ul className="nav-right">
      <li className="nav-item">
        <NavLink to="/create_event">New Event</NavLink>
      </li>
      <li className="nav-item">
        <button type="button" className="link-button" onClick={props.signOut}>
          Log Out
        </button>
      </li>
    </ul>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};
export default connect(null, mapDispatchToProps)(SignedIn);
