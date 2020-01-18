/** @format */

import React, { Component } from "react";
import { Menu, Container, Button } from "semantic-ui-react";
import { NavLink, withRouter } from "react-router-dom";
import SignOutMenu from "../Menu/SignOutMenu";
import SingInMenu from "../Menu/SingInMenu";
import { connect } from "react-redux";

import { withFirebase } from "react-redux-firebase";
class Navbar extends Component {
  //handle sign in
  handleSignIn = () => {
    console.log("hhhhh");
    this.props.history.push("/events");
  };

  //Register
  handleRegister = () => {
    console.log("Regiter");
  };

  //Handle Sign Out
  handleSignOut = () => {
    this.props.firebase.logout();
    this.props.history.push("/");
  };
  render() {
    const { auth } = this.props;

    const authenticated = auth.isLoaded && !auth.isEmpty;
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

          {authenticated ? (
            <SingInMenu handleSignOut={this.handleSignOut} auth={auth} />
          ) : (
            <SignOutMenu
              handleSignIn={this.handleSignIn}
              handleRegister={this.handleRegister}
            />
          )}
        </Container>
      </Menu>
    );
  }
}

// const actions = {
//   logout
// };

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  };
};

export default withRouter(withFirebase(connect(mapStateToProps)(Navbar)));
