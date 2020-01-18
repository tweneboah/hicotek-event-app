/** @format */

import React from "react";
import { Form, Segment, Button, Label, Divider } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import TextInput from "../../../app/common/form/TextInput";
import {
  login,
  socialLogin
} from "../../../redux/actions/authActions/authActions";
import { connect } from "react-redux";
import SocialLogin from "../SocialLogin/SocialLogin";

//handleSubmit from redux form
//The error is from redux we passed to action and it's availabe as props in our form

const LoginForm = ({ login, socialLogin, handleSubmit, error }) => {
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
        <Divider horizontal>Or</Divider>
        <SocialLogin socialLogin={socialLogin} />
      </Segment>
    </Form>
  );
};

const actions = {
  login,
  socialLogin
};

export default connect(
  null,
  actions
)(reduxForm({ form: "loginForm" })(LoginForm));
