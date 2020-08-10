import React from "react";
import { Link } from "react-router-dom";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";
import { connect } from "react-redux";

const Navbar = props => {
  const { auth } = props;
  const links = auth.uid ? <SignedIn /> : <SignedOut />;
  return (
    <header>
      <div className="container">
        <div className="nav-logo">
          <Link to="/" className="logo blink">
            Events
          </Link>
        </div>
        {auth.isLoaded && links}
      </div>
    </header>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps, null)(Navbar);
