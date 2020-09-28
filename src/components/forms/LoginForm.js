import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";
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

  onSubmit = () => {
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.props.submit(this.state.data)
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
      <Form onSubmit={this.onSubmit}>
        <Form.Field error={!!errors.email}>
          <label htmlFor="email">
            Email
            <input
              type="email"
              id="email"
              name="email"
              placeholder="example@example.com"
              value={data.email}
              onChange={this.onChange}
            />
            {errors.email && <InlineError text={errors.email} />}
          </label>
        </Form.Field>
        <Form.Field error={!!errors.password}>
          <label htmlFor="password">
            Password
            <input
              type="password"
              id="password"
              name="password"
              placeholder="example@example.com"
              value={data.password}
              onChange={this.onChange}
            />
            {errors.email && <InlineError text={errors.password} />}
          </label>
        </Form.Field>
        <Button primary>Login</Button>
      </Form>
    );
  }
}