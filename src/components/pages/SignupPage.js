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
              bottom: "60px",
              left: "0px",
              height: "70%",
              zIndex: "-1",
              opacity: "0.2",
            }}
          />
          <img
            className="p-0 m-0"
            src={require("../../assets/blob2.svg")}
            style={{
              display: "flex",
              position: "absolute",
              top: "10px",
              right: "20px",
              height: "60%",
              zIndex: "-1",
              opacity: "0.9",
            }}
          />
          <SignupForm submit={this.submit} />
        </div>
      </div>
    );
  }
}

export default connect(null, { signup })(SignupPage);
