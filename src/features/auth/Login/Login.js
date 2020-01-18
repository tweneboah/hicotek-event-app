/** @format */

import React from "react";
import { Form, Segment, Button, Label } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import TextInput from "../../../app/common/form/TextInput";
import { login } from "../../../redux/actions/authActions/authActions";
import { connect } from "react-redux";

//handleSubmit from redux form
//The error is from redux we passed to action and it's availabe as props in our form

const LoginForm = ({ login, handleSubmit, error }) => {
  // Whatever this [onSubmit={handleSubmit(login)] returns is from the form input
  return (
    <Form
      onSubmit={handleSubmit(login)}
      size="large"
      autoComplete="off"
      style={{ margin: 200 }}
    >
      <Segment>
        <Field
          name="email"
          component={TextInput}
          type="text"
          placeholder="Email Address"
        />
        <Field
          name="password"
          component={TextInput}
          type="password"
          placeholder="password"
        />
        {error && (
          <Label basic color="red">
            {error}
          </Label>
        )}
        <Button fluid size="large" color="teal">
          Login
        </Button>
      </Segment>
    </Form>
  );
};

const actions = {
  login
};

export default connect(
  null,
  actions
)(reduxForm({ form: "loginForm" })(LoginForm));
