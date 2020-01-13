/** @format */

import React, { Component } from "react";
import { Menu, Container, Button } from "semantic-ui-react";
import { NavLink, withRouter } from "react-router-dom";
import SignOutMenu from "../Menu/SignOutMenu";
import SingInMenu from "../Menu/SingInMenu";

class Navbar extends Component {
  state = {
    isAuthenticated: true
  };

  //handle sign in
  handleSignIn = () => {
    this.setState({
      isAuthenticated: true
    });
  };

  //Handle Sign Out

  handleSignOut = () => {
    this.setState({
      isAuthenticated: false
    });
    this.props.history.push("/");
  };
  render() {
    const { isAuthenticated } = this.state;

    return (
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item as={NavLink} to="/" header>
            <img src="assets/images/logo.png" alt="logo" />
            Re-vents
          </Menu.Item>
          <Menu.Item as={NavLink} exact to="/events" name="Events" />

          <Menu.Item as={NavLink} to="/people" name="People" />
          <Menu.Item as={NavLink} to="/create-event">
            <Button floated="right" positive inverted content="Create Event" />
          </Menu.Item>

          {/* SIGN SIGNOUT MENUS */}

          {isAuthenticated ? (
            <SingInMenu handleSignOut={this.handleSignOut} />
          ) : (
            <SignOutMenu handleSignIn={this.handleSignIn} />
          )}
        </Container>
      </Menu>
    );
  }
}

export default withRouter(Navbar);
