/** @format */

import React, { Component } from "react";
import EventDashboard from "../../features/event/EventDashboard/EventDashboard";
import Navbar from "../../features/nav/Navbar/Navbar";
import { Container } from "semantic-ui-react";
import { Route, Switch, withRouter } from "react-router-dom";
import HomePage from "../../features/home/HomePage";
import PeopleDashboard from "../../features/user/PeopleDashboard/PeopleDashboard";
import UserDetailed from "../../features/user/userDetailed/UserDetailed";
import SettingsDashboard from "../../features/user/Settings/SettingsDashboard";
import EventForm from "../../features/event/EventForm/EventForm";
import EventDetailPage from "../../features/event/EventDetailPage/EventDetailPage";
import ModalManger from "../../TestComponent/Modals/ModalManger";
import Login from "../../features/auth/Login/Login";
import Register from "../../features/auth/Register/Register";

class App extends Component {
  render() {
    return (
      <>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={Login} />

        <Route exact path="/register" component={Register} />
        <Route
          path="/(.+)"
          render={() => (
            <>
              <Navbar />
              <ModalManger />
              <Container className="main">
                <Switch key={this.props.location.key}>
                  <Route exact path="/events" component={EventDashboard} />
                  <Route exact path="/people" component={PeopleDashboard} />
                  <Route exact path="/profile/:id" component={UserDetailed} />

                  <Route path="/settings" component={SettingsDashboard} />

                  <Route
                    exact
                    path={["/create-event", "/manage/:id"]}
                    component={EventForm}
                  />

                  {/* <Route exact path="/manage/:id" component={EventForm} />
                <Route exact path="/create-event" component={EventForm} /> */}
                  <Route exact path="/events/:id" component={EventDetailPage} />
                </Switch>
              </Container>
            </>
          )}
        />
      </>
    );
  }
}

export default withRouter(App);
