/** @format */

import React from "react";
import { Menu, Button } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

const SignOutMenu = ({ handleSignIn, handleRegister }) => {
  return (
    <Menu.Item position="right">
      <Button basic inverted content="Login" as={NavLink} to="/login" />
      <Button
        basic
        inverted
        content="Register"
        style={{ marginLeft: "0.5em" }}
        as={NavLink}
        to="/register"
      />
    </Menu.Item>
  );
};

export default SignOutMenu;
