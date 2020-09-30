import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../actions/auth";

const HomePage = ({ isAuthenticated, logout }) => (
  <div className="landing-page-component m-0 text-white">
    <div className="container h-100" style={{position: "relative"}}>
      <h1>Home Page</h1>
      {isAuthenticated ? (
      <button onClick={() => logout()}>Logout</button>
    ) : (
      <div>
        <Link to="/signin">Login</Link> or <Link to="/signup">Sign Up</Link>
      </div>
    )}
      <img src={require("../../assets/illlustrations/8684.jpg")} height="400px"
      style={{
        position: "absolute",
        bottom: "0"
      }}
      />
    </div>
  </div>
);
function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.user.token,
  };
}

export default connect(mapStateToProps, { logout: actions.logout })(HomePage);
