import React from "react";
import { Link } from "react-router-dom";
import isEmail from "validator/lib/isEmail";
import InlineError from "../messages/InlineError";

class SignupForm extends React.Component {
  state = {
    data: {
      email: "",
      password: "",
      username: "",
    },
    loading: false,
    errors: {},
  };

  onChange = (e) =>
    this.setState({
      ...this.state,
      data: { ...this.state.data, [e.target.name]: e.target.value },
    });

  onSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.setState({ loading: true });
      this.props
        .submit(this.state.data)
        .catch((err) =>
          this.setState({ errors: err.response.data.errors, loading: false })
        );
    }
  };

  validate = (data) => {
    const errors = {};

    if (!isEmail(data.email)) errors.email = "Invalid email";
    if (!data.password) errors.password = "Can't be blank";
    if (!data.username) errors.username = "Can't be blank";
    if (!data.fullname) errors.fullname = "Can't be blank";

    return errors;
  };

  render() {
    const { data, errors, loading } = this.state;
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
              opacity: "0.2"
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
              opacity: "0.9"
            }}
          />
          <div style={{ width: "45%" }}>
            <h1>Sign up to SOMETHING</h1>
            <div className="w-100 d-flex justify-content-between mb-3">
              <a className="btn w-75 d-flex align-items-center icon-btn-block p-3">
                <img
                  src={require("../../assets/icons/search.svg")}
                  height="20px"
                  className="float-left"
                />
                <span className="mx-auto">Sign up with Google</span>
              </a>
              <a className="btn btn-secondary h-100 icon-btn p-3">
                <img
                  src={require("../../assets/icons/facebook.svg")}
                  height="20px"
                />
              </a>
              <a className="btn btn-secondary h-100 icon-btn p-3">
                <img
                  src={require("../../assets/icons/twitter.svg")}
                  height="20px"
                />
              </a>
            </div>
            <div className="text-center mb-3" style={{ color: "#797979" }}>
              -- or --
            </div>
            <form onSubmit={this.onSubmit}>
              <div className="row m-0">
                <div className="form-group col-6 p-0 pr-2">
                  <label htmlFor="fullname" className="mb-3">
                    Full Name
                  </label>
                  <input
                    className="form-control p-4"
                    type="text"
                    id="fullname"
                    name="fullname"
                    value={data.fullname}
                    autoComplete="off"
                    onChange={this.onChange}
                  />
                  {errors.fullname && <InlineError text={errors.fullname} />}
                </div>
                <div className="form-group col-6 p-0 pl-2">
                  <label htmlFor="username" className="mb-3">
                    Username
                  </label>
                  <input
                    className="form-control p-4"
                    type="text"
                    id="username"
                    name="username"
                    autoComplete="off"
                    value={data.username}
                    onChange={this.onChange}
                  />
                  {errors.username && <InlineError text={errors.username} />}
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="email" className="mb-3">
                  Email
                </label>
                <input
                  className="form-control p-4"
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="off"
                  value={data.email}
                  onChange={this.onChange}
                />
                {errors.email && <InlineError text={errors.email} />}
              </div>
              <div className="form-group">
                <label htmlFor="password" className="mb-3">
                  Password
                </label>
                <input
                  className="form-control p-4"
                  type="password"
                  id="password"
                  name="password"
                  autoComplete="off"
                  placeholder="6+ characters"
                  value={data.password}
                  onChange={this.onChange}
                />
                {errors.password && <InlineError text={errors.password} />}
              </div>
              <button className="btn mt-3 px-5 py-3 cta-primary" type="submit">
                Create Account
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SignupForm;
