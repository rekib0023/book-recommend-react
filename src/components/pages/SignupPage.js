import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import SignupForm from "../forms/SignupForm";
import { signup } from "../../actions/users";

class SignupPage extends React.Component {
  submit = (data) =>
    this.props.signup(data).then(() => this.props.history.push("/dashboard"));

  render() {
    return (
      <div className="row" style={{ height: "100vh" }}>
        <div className="col-md center-content text-white gradient-component">
          <Link
            to="/"
            className="close"
            aria-label="Close"
            style={{
              position: "absolute",
              top: "20px",
              left: "20px",
            }}
          >
            <span
              aria-hidden="true"
              style={{ fontSize: "40px", fontWeight: "bolder" }}
            >
              &times;
            </span>
          </Link>
          <div style={{ width: "75%" }} className="text-center">
            <h1>Welcome Back!</h1>
            <p>
              To keep connected with us please login with your personal info
            </p>
            <Link to="/login" className="btn btn-outline-light">
              Login
            </Link>
          </div>
        </div>
        <div className="col-md-8 center-content form-component p-0 m-0">
          <img
            className="p-0 m-0"
            src={require("../../assets/blob.svg")}
            style={{
              position: "absolute",
              top: "-210px",
              left: "-230px",
              height: "100%",
              zIndex: "-1",
              opacity: "0.2",
              objectFit: "none",
              objectPosition: "5px 10%",
            }}
          />
          <img
            className="p-0 m-0"
            src={require("../../assets/blob2.svg")}
            style={{
              display: "flex",
              position: "absolute",
              top: "0px",
              right: "-220px",
              height: "100%",
              zIndex: "-1",
              opacity: "0.9",
              objectFit: "none",
              objectPosition: "5px 10%",
            }}
          />
          <SignupForm submit={this.submit} />
        </div>
      </div>
    );
  }
}

export default connect(null, { signup })(SignupPage);
