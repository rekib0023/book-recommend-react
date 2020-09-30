import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Message } from "semantic-ui-react";
import Validator from "validator";
import InlineError from "../messages/InlineError";

export default class LoginForm extends Component {
  state = {
    data: {
      email: "",
      password: "",
    },
    loading: false,
    errors: {},
  };

  onChange = (e) =>
    this.setState({
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
    if (!Validator.isEmail(data.email)) errors.email = "Invalid email";
    if (!data.password) errors.password = "Can't be blank";
    return errors;
  };

  render() {
    const { data, loading, errors } = this.state;

    return (
      <div style={{ width: "45%" }}>
        <h1>Sign in to SOMETHING</h1>
        <div className="w-100 d-flex justify-content-between mb-3">
          <a className="btn w-75 d-flex align-items-center icon-btn-block p-3">
            <img
              src={require("../../assets/icons/search.svg")}
              height="20px"
              className="float-left"
            />
            <span className="mx-auto">Sign in with Google</span>
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
          <div className="mt-4">
            <button className="btn px-5 py-2 cta-primary w-50" type="submit">
              Sign In
            </button>
            <span className="ml-3">
              Not a member? <Link to="/signup">Sign up now</Link>
            </span>
          </div>
        </form>
      </div>

      // <Form onSubmit={this.onSubmit} loading={loading}>
      // {errors.global && (
      //   <Message negative>
      //     <Message.Header>Something went wrong</Message.Header>
      //     <p>{errors.global}</p>
      //   </Message>
      //   )}
      //   <Form.Field error={!!errors.email}>
      //     <label htmlFor="email">
      //       Email
      //       <input
      //         type="email"
      //         id="email"
      //         name="email"
      //         placeholder="example@example.com"
      //         value={data.email}
      //         onChange={this.onChange}
      //       />
      //       {errors.email && <InlineError text={errors.email} />}
      //     </label>
      //   </Form.Field>
      //   <Form.Field error={!!errors.password}>
      //     <label htmlFor="password">
      //       Password
      //       <input
      //         type="password"
      //         id="password"
      //         name="password"
      //         placeholder="Make it secure"
      //         value={data.password}
      //         onChange={this.onChange}
      //       />
      //       {errors.email && <InlineError text={errors.password} />}
      //     </label>
      //   </Form.Field>
      //   <Button primary>Login</Button>
      // </Form>
    );
  }
}
