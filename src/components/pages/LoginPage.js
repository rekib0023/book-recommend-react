import React, { Component } from "react";
import LoginForm from "../forms/LoginForm";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../actions/auth";

class LoginPage extends Component {
  submit = (data) =>
    this.props.login(data).then(() => this.props.history.push("/dashboard"));

  render() {
    return (
      <div className="row" style={{ height: "100vh" }}>
        <div className="col-md-8 center-content form-component p-0 m-0">
          <img
            className="p-0 m-0"
            src={require("../../assets/blob4.svg")}
            style={{
              position: "absolute",
              bottom: "10px",
              left: "-120px",
              height: "100%",
              zIndex: "-1",
              opacity: "0.8",
              objectFit: "none",
              objectPosition: "5px 10%",
            }}
          />
          <img
            className="p-0 m-0"
            src={require("../../assets/blob5.svg")}
            style={{
              display: "flex",
              position: "absolute",
              top: "-200px",
              right: "-160px",
              height: "100%",
              zIndex: "-1",
              opacity: "0.5",
              objectFit: "none",
              objectPosition: "5px 10%",
            }}
          />
          <LoginForm submit={this.submit} />
        </div>
        <div className="col-md center-content text-white gradient-component">
          <Link
            to="/"
            className="close"
            aria-label="Close"
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
            }}
          >
            <span aria-hidden="true" style={{ fontSize: "40px", fontWeight: "bolder" }}>
              &times;
            </span>
          </Link>
          <div style={{ width: "75%" }} className="text-center">
            <h1>Welcome Back!</h1>
            <p>
              To keep connected with us please login with your personal info
            </p>
            <Link to="/signup" className="btn btn-outline-light">
              Login
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { login })(LoginPage);
